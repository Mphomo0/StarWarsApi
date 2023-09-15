export default async function getAllFilms() {
    // Make an asynchronous request to the SWAPI API to fetch all films
    const response = await fetch('https://swapi.dev/api/films');
  
    // Check if the response is not okay (e.g., network error or HTTP error)
    if (!response.ok) {
      // If there's an issue with the response, throw an error
      throw new Error('Failed to fetch films');
    }
  
    // If the response is successful, parse and return the JSON data
    return await response.json();
  }
  