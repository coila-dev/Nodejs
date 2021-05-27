const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        Hola: 'Principal'
    });
});
module.exports = router; 