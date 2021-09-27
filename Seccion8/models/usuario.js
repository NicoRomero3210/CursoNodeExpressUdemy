/**
 * {
 *  nombre: "asd",
 *  correo: "asdañslkd@asldkjalksd.com",
 *  password: "ldskfjlskjf",
 *  img: "asñjdlaskkdad"
 *  rol:"kasjdasgdjaghjdh",
 *  estado:false,
 *  google: false
 * }
 */

const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema(
	{
		nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
		password: { type: String, required: [true, 'El nombre es obligatorio'] },
		correo: {
			type: String,
			required: [true, 'El correo es obligatorio'],
			unique: true,
		},
		rol: { type: String, required: true, enum: ['ADMIN_ROLE', 'USER_ROLE'] },
		estado: { type: Boolean, default: false },
		google: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
);

module.exports = model('Usuario', UsuarioSchema);
