const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/api/career', (req, res) => {
  res.json({ message: 'Career data' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
