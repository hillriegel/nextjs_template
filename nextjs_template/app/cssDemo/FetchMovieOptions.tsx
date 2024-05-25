
// FetchMovies.js
async function FetchMovies() {

    const authToken = process.env.REACT_APP_API_KEY;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: authToken,
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
