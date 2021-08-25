const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const port = process.env.PORT;

//Middlewares

//Servir contenido estatico
app.use(express.static('public'));

//Rutas
app.use('/generic', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/generic.html'));
});
app.use('/elements', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/elements.html'));
});
//Ruta de error
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(port, () => {
	console.log(`Escuchando al puerto ${port}`);
});
