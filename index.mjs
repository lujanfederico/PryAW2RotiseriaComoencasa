import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Necesario para obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Archivos públicos
app.use(express.static(path.join(__dirname, 'recursos')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'vistas', 'index.html'));
});

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});