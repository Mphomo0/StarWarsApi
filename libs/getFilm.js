export default async function getFilm(id) {
    // Make a GET request to the SWAPI API to fetch film data by ID
    const response = await fetch(`https://swapi.dev/api/films/${id}`);

    // Check if the response status is not OK (HTTP status code outside the range 200-299)
    if (!response.ok) {
        // Throw an error if the request fails
        throw new Error('Failed to fetch film');
    }

    // Parse the response body as JSON and return it
    return response.json();
}
