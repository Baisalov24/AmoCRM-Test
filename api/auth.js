// api/auth.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    const { code } = req.body;
  
    try {
      const response = await fetch('https://temirlanbaisalov35.amocrm.ru/oauth2/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: process.env.AMOCRM_CLIENT_ID,
          client_secret: process.env.AMOCRM_CLIENT_SECRET,
          grant_type: 'authorization_code',
          code,
          redirect_uri: process.env.AMOCRM_REDIRECT_URI
        })
      });
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка получения токена' });
    }
  }