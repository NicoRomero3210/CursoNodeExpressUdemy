require('dotenv').config();
const express = require('express');

class Server {
	constructor() {
		this.app = express();
		this.routes();
		//Middlewares
		this.middlewares();
		//Rutas de mi aplicacion
		this.port = process.env.PORT;
	}

	middlewares() {
		//Directorio publico
		this.app.use(express.static(process.env.PUBLIC_FOLDER));
	}

	routes() {
		this.app.get('/api', (req, res) => {
			res.send();
		});
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`listen in port ${this.port}`);
		});
	}
}

module.exports = Server;
