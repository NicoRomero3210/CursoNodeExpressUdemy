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
		check('rol', 'El rol no esta permitido').isIn(['ADMIN_ROLE', 'USER_ROL']),
		validarCampos,
	],
	usuariosPost
);

router.put('/:id', usuariosPut);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;
