const express = require('express');
// este router es el que nos va manejar las rutas
const router = express.Router();

router.get('/login', async (req, res) => {

    //renderiza el archivo index(se le puede cambiar el nombre)
    res.render('partials/login');
})

module.exports = router;