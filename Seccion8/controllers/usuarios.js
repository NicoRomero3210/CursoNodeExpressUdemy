const { response } = require('express');
const UsuarioModel = require('../models/usuario');
const bcrypt = require('bcryptjs');

const usuariosGet = (req, res = response) => {
	const { q, nombre = 'no Name', apiKey = 'no api key' } = req.query;
	res.json({
		data: 'get',
		q,
		nombre,
		apiKey,
	});
};

const usuariosPost = async (req, res = response) => {
	try {
		//Verifico si correo es un email

		const { nombre, correo, password, rol } = req.body;
		const newUser = new UsuarioModel({ nombre, correo, password, rol });		
		//Encriptar pass
		const salt = bcrypt.genSaltSync();
		newUser.password = bcrypt.hashSync(password, salt);
		await newUser.save();
		res.json({
			data: 'post',
			usuario: newUser,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
};

const usuariosDelete = (req, res = response) => {
	res.json({
		data: 'delete',
	});
};

const usuariosPatch = (req, res = response) => {
	res.json({
		data: 'pach',
	});
};

const usuariosPut = (req, res = response) => {
	const { id } = req.params;
	res.json({
		data: 'put',
	});
};

module.exports = {
	usuariosGet,
	usuariosPost,
	usuariosDelete,
	usuariosPatch,
	usuariosPut,
};
