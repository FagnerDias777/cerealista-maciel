export default async function handler(req, res) {
  const apiKey = 'AIzaSyAObqJSVqRZr-XXg8rGwZ01bf7cxbHaIuM';
  const placeId = 'ChIJj61dQgK6j4AR4GeTYWZsKWw';

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Erro na resposta da API:', data);
      return res.status(500).json({ error: 'Erro na API do Google', status: data.status });
    }

    const reviews = data.result.reviews?.slice(0, 3) || [];
    res.status(200).json({ reviews });
  } catch (error) {
    console.error('Erro ao buscar comentários:', error);
    res.status(500).json({ error: 'Erro ao buscar comentários' });
  }
}
