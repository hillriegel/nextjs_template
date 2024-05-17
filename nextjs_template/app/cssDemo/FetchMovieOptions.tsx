
// FetchMovies.js
async function FetchMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGY2MjJhZGQ0MDY0NTlmMzk2NmJkOTI3NTBhM2Q3ZiIsInN1YiI6IjY2NDY2ZjFkYjY5NGY0M2I3MWIzNTRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tCIZlN87v37TS0TLbeda_VkAd7u44z6GZwg3wGy7Rm8'
        }
    };

    try {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return await response.json(); // Return the JSON data
    } catch (error) {
        console.error('Failed to fetch movies:', error);
        throw error; 
    }
}

export default FetchMovies;
