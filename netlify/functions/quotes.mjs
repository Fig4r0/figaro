/**
 * Netlify Function: Obtención de cotizaciones en tiempo real para las Tesis de Jaime Danús
 * Endpoint: /.netlify/functions/quotes
 */

export default async (req, context) => {
  const tickers = ['GRE.MC', 'AMP.MC', 'XP', 'COL.MC', 'DOU.DE'];
  const quotes = {};

  await Promise.all(
    tickers.map(async (ticker) => {
      try {
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&range=1d`;
        const res = await fetch(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          }
        });

        if (res.ok) {
          const data = await res.json();
          const meta = data?.chart?.result?.[0]?.meta;
          if (meta && typeof meta.regularMarketPrice === 'number') {
            quotes[ticker] = {
              price: meta.regularMarketPrice,
              currency: meta.currency === 'USD' ? '$' : '€',
              changePct: meta.regularMarketChangePercent || 0,
              time: meta.regularMarketTime || Math.floor(Date.now() / 1000)
            };
          }
        }
      } catch (err) {
        // En caso de fallo individual, se omite y el frontend usa el fallback local
      }
    })
  );

  return new Response(
    JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString(),
      quotes
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=120' // Cache de 2 minutos
      }
    }
  );
};
