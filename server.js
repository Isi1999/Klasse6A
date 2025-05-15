const express = require('express');
const path = require('path');

const app = express();

// Statischer Ordner für HTML
app.use(express.static(path.join(__dirname, 'public')));

// Startseite bei / liefern (optional, aber hilft)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Port (Render erwartet process.env.PORT!)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
