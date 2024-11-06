const express = require('express')
const router = express.Router()
const postControllers = require('../controllers/postControllers.js')

router.get("/", postControllers.index);

router.get("/:title", postControllers.show);

router.post('/', postControllers.store)

router.put('/:title', postControllers.update)

router.delete('/:title', postControllers.destroy)

module.exports =  router;

