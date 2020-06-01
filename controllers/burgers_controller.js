const router = require('express').Router()
const { Burger } = require('../models/burger')

router.get('/', (req, res) => res.redirect('/burgers')) 


router.get('/burgers', (req, res) => {
    Burger.getBurgers()
        .then(burgerData => res.render('index', { burgers: burgerData }))
        .catch(err => console.error(err))
})

router.post('/burgers', (req, res) => Burger.addBurgers(req.body, info => res.json(info)))

router.put('/burgers/:id', (req, res) => Burger.updateBurgers(req.body, {id: req.params.id }, info => res.json(info)))

module.exports = router
