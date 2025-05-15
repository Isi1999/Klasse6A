const express = require('express');
const path = require('path');

const app = express();

// Macht die HTML-Seite öffentlich sichtbar
app.use(express.static(path.join(__dirname, 'public')));

// Startet den Server auf Render (Port wird automatisch erkannt)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server läuft unter http://localhost:${port}`);
});
