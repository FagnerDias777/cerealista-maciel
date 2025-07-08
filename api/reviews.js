export default async function handler(req, res) {
  const apiKey = 'AIzaSyAObqJSVqRZr-XXg8rGwZ01bf7cxbHaIuM';
  const placeId = 'ChIJZ7GuPhCdwpQRWXNLp6NTxwY';

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log('Resposta da API Google:', data);

    if (!data.result || !data.result.reviews) {
      return res.status(200).json({ reviews: [] });
    }

    const reviews = data.result.reviews.slice(0, 3);
    res.status(200).json({ reviews });
  } catch (error) {
    console.error('Erro ao buscar comentários:', error);
    res.status(500).json({ error: 'Erro ao buscar comentários' });
  }
}
