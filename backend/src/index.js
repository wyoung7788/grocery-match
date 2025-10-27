const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// example endpoint
app.get('/api/items', (req, res) => {
  res.json([{ id: 1, name: 'Apples' }]);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
