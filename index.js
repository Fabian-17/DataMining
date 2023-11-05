import express from 'express';
import encuestaRouter from './src/routes/encuestaRouter.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

import { connetToDB } from './src/config/db.js';

app.use(express.json());


// Configurar el motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', encuestaRouter);
app.get('/', (req, res) => {
    // Renderizar el archivo HTML utilizando EJS
    res.sendFile(__dirname+'/view/index.html');
});

app.listen(port, () => {
    connetToDB();
    console.log(`Servidor en el puerto ${port}`);
});
