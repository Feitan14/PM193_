// utils/api.js

const API_KEY = 'D4S1GAZE2VER110LAU3YOQLYTVWJR5FWSOHXJRGDWTFRFXJ0'; // Tu API Key real sin "Bearer"

export async function searchRestaurants(query, location) {
  const url = `https://places-api.foursquare.com/places/search?query=${encodeURIComponent(query)}&near=${encodeURIComponent(location)}&limit=10`;

  try {
    const response = await fetch(url, {
      headers: {
        'accept': 'application/json',
        'authorization': `Bearer ${API_KEY}`,              // Aquí va "Bearer " + API_KEY
        'X-Places-Api-Version': '2025-06-17'               // Header obligatorio según ejemplo
      }
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error al buscar restaurantes:', error);
    throw error;
  }
}
