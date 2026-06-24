import { getYearData, YearData, Headline } from "./relicData";

/**
 * Fetches additional headlines from Wikipedia API for the given year,
 * merging it with our local high-fidelity data.
 * Falls back gracefully to local database on rate limit or offline mode.
 */
export async function fetchYearDetails(year: number): Promise<YearData> {
  const localData = getYearData(year);
  
  try {
    // Wikipedia API request for events in that year
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${year}+major+news+events&format=json&origin=*`;
    
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
      next: { revalidate: 3600 } // cache for 1 hour in Next.js
    });

    if (!response.ok) {
      throw new Error(`Wikipedia API responded with status ${response.status}`);
    }

    const data = await response.json();
    
    if (data?.query?.search && Array.isArray(data.query.search)) {
      // Map search results to Headline interface
      const wikiHeadlines: Headline[] = data.query.search
        .slice(0, 3) // Get top 3
        .map((item: any) => {
          // Strip HTML tags from Wikipedia snippet
          const cleanSummary = item.snippet
            .replace(/<\/?[^>]+(>|$)/g, "")
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .trim();
            
          return {
            title: item.title.replace(`in ${year}`, "").trim(),
            category: "World" as const,
            summary: cleanSummary + "..."
          };
        });

      if (wikiHeadlines.length > 0) {
        // Merge - keep some local high fidelity headlines, insert wiki headlines
        return {
          ...localData,
          headlines: [
            ...localData.headlines.slice(0, 1),
            ...wikiHeadlines,
            ...localData.headlines.slice(1)
          ].slice(0, 4) // cap at 4 total headlines
        };
      }
    }
  } catch (error) {
    console.warn(`Wikipedia API failed for year ${year}. Using local fallback.`, error);
  }

  // Graceful fallback
  return localData;
}
