const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Servir archivos estáticos desde la carpeta de compilación de React
app.use(express.static(path.join(__dirname, "build")));

// Servir el index.html en cualquier ruta que no coincida con los archivos estáticos
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
