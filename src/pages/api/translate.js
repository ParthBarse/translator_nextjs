export default function handler(req, res) {
    if (req.method === 'POST') {
      const { text} = req.body;
      const response = fetch('http://localhost:5000/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text})
      });
      const data = response.json();
      res.status(200).json(data);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  