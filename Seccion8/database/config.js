const mongoose = require('mongoose');

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_CNN, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Base de datos Online');
	} catch (e) {
		console.log(e);
		throw new Error('Error al iniciar la bd', e);
	}
};

module.exports = {
	dbConnection,
};
