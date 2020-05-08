const express = require('express')
const router = express.Router();
const Notification = require('../models/notifications')
const User = require('../models/users')

router.get('/notifications', (req, res) => {
    res.send({type: 'GET'})
})

router.post('/notifications', (req, res, next) => {
    Notification.create(req.body).then((notification) => res.send(notification)).catch(next);
})


router.get('/users', (req, res) => {
    res.send({type: 'GET'})
})

router.post('/users', (req, res, next) => {
    User.create(req.body).then((user) => {res.send(user)}).catch(next);
})

router.put('/users/:id', (req, res) => {
    res.send({type: 'put'})
})

router.delete('/users/:id', (req, res) => {
    res.send({type: 'delete'})
})

module.exports = router
