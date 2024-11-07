const express = require('express')
const router = express.Router()

const videogamesControllers = require('../controllers/videogamesControllers.js')


// INDEX 
router.get('/', videogamesControllers.index)

// SHOW 
router.get('/:nome', videogamesControllers.show)

// POST 
router.post("/", videogamesControllers.store);

// PUT 
router.put('/:nome', videogamesControllers.update);

// DESTROY 
router.delete('/:nome', videogamesControllers.destroy)



module.exports = router