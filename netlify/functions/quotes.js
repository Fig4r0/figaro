/**
 * Netlify Function: Obtención de cotizaciones en tiempo real para las Tesis de Jaime Danús
 * Endpoint: /.netlify/functions/quotes
 */

exports.handler = async function(event, context) {
  const tickers = ['^IBEX', '^GSPC', '^STOXX50E', '^NDX', 'GRE.MC', 'AMP.MC', 'COL.MC', 'DOU.DE', 'XP'];
  const quotes = {};

  await Promise.all(
    tickers.map(async (ticker) => {
      try {
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=1d`;
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
        // En caso de error individual, se ignora y el frontend usa los datos base
      }
    })
  );

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=120'
    },
    body: JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString(),
      quotes
    })
  };
};
