// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
	constructor() {
		this.app = express();
		this.usuariosPath = '/api/usuarios';
		//Conexion BD
		this.conectarDB();
		//Middlewares
		this.middlewares();
		//Rutas de mi aplicacion
		this.port = process.env.PORT;
		this.routes();
	}

	middlewares() {
		//Directorio publico
		this.app.use(express.static(process.env.PUBLIC_FOLDER));
		//CORS
		this.app.use(cors());
		//Lectura y parseo del body
		this.app.use(express.json());
	}

	async conectarDB() {
		await dbConnection();
	}

	routes() {
		this.app.use(this.usuariosPath, require('../routes/user.routes'));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`listen in port ${this.port}`);
		});
	}
}

module.exports = Server;
