export async function searchQuery(query) {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    console.log("OMDb API Key (dev):", apiKey);
    
    const url = `http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.Search;

    } catch (error) {
        console.error(error);
        return [];
    }
}