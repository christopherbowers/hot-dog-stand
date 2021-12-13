const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();



router.get('/', (req, res) => res.send('This is root!'))

router.get('/mains', controllers.getAllMains)
router.get('/sides', controllers.getAllSides)
router.get('/drinks', controllers.getAllDrinks)




module.exports = router;