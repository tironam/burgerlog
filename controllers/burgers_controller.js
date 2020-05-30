const router = require('express').Router()
const { Burger } = require('../models/burger')

router.get('/burgers', (req, res) => Burger.getBurgers(burgers => res.json(burgers)))

router.post('/burgers', (req, res) => Burger.addBurgers(req.body, info => res.json(info)))

router.put('/burgers', (req, res) => Burger.updateBurgers(req.body, {id: req.params.id }, info => res.json(info)))

module.exports = router
