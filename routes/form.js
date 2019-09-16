const express = require('express');
// este router es el que nos va manejar las rutas
const router = express.Router();
// llamar libreria multer (documentación)
const multer  = require('multer');
//const upload = multer({ dest: 'uploads/' });
var upload = multer({ dest : 'uploads/' })

router.get('/form', async (req, res) => {

    //renderiza el archivo index(se le puede cambiar el nombre)
    res.render('partials/form');
});

router.post('/profile', upload.single('avatar'), function (req, res, next) {
      let image = req.body
      res.send({message: `Arhivo enviado`})
      next();
});


module.exports = router;