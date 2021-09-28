const { Router } = require('express');
const {
	usuariosGet,
	usuariosDelete,
	usuariosPatch,
	usuariosPost,
	usuariosPut,
} = require('../controllers/usuarios');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, existeMail } = require('../helpers/db-validators');
const router = Router();

router.get('/', usuariosGet);

router.post(
	'/',
	[
		check('nombre', 'El nombre es obligatorio').not().isEmpty(),
		check('password', 'El password debe tener mas de 6 letras').isLength({
			min: 6,
		}),
		check('correo', 'El correo no es valido').isEmail(),
		check('correo').custom(existeMail),
		// en  custom se le pasa como argumento una funcion (role)=>{} pero como es roleValido recibe role como parametro solo se le pasa la referencia de esRoleValido
		// de esta forma es como si estuvieramos haciendo (role)=>esRoleValido(role)
		check('rol').custom(esRoleValido),
		validarCampos,
	],
	usuariosPost
);

router.put('/:id', usuariosPut);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;
