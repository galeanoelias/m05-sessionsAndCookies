let express = require('express')
let router = express.Router()
let indexController = require('../controllers/indexController.js')
let validator = require('../validators/validation.js')

router.get('/', indexController.index)
router.post('/store', validator, indexController.store)


module.exports = router