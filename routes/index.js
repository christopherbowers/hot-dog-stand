const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();



router.get('/', (req, res) => res.send('This is root!'))

router.get('/mains', controllers.getAllMains)
router.get('/sides', controllers.getAllSides)
router.get('/drinks', controllers.getAllDrinks)


router.put('/mains/:id', controllers.updateMains)
router.put('/sides/:id', controllers.updateSides)
router.put('/drinks/:id', controllers.updateDrinks)



module.exports = router;