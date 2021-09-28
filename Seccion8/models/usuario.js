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
		//rol: { type: String, required: true, enum: ['ADMIN_ROLE', 'USER_ROLE'] }, Quito esta definicion porque ahora lo controlo por un middleware
		rol: { type: String, required: true },
		estado: { type: Boolean, default: false },
		google: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
);

//De esta forma evitamos que nos mande datos que no queremos retornar, como el password
UsuarioSchema.methods.toJSON = function () {
	const { _v, password, ...user } = this.toObject();
	return user;
};

module.exports = model('Usuario', UsuarioSchema);
