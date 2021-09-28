const { Schema, model } = require('mongoose');

const RolSchema = Schema({
	rol: {
		type: String,
		required: [true, 'El nomre del rol es requreido'],
	},
});

module.exports = model('Role', RolSchema);
