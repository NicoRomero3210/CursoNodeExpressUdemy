const RoleModel = require('../models/rol');

const esRoleValido = async (rol = '') => {
	const existeRol = await RoleModel.findOne({ rol });
	if (!existeRol) {
		throw new Error(`El rol ${rol} no existe en la BD`);
	}
};


const existeMail = async (correo = '') => {
	const existeEmail = await UsuarioModel.findOne({ correo });
		if (existeEmail) {
			throw new Error(`El correo ${correo} ya existe en la BD`);

		}
};

module.exports = {
	esRoleValido,
	existeMail
};
