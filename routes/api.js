const express = require('express')
const router = express.Router();
const User = require('../models/users')
const Notification = require('../models/notifications')

//notifications routes
router.get('/notifications', (req, res, next) => {
    Notification.find({}).then((notification) => res.send(notification));
})

router.post('/notifications', (req, res, next) => {
    Notification.create(req.body).then((notification) => res.send(notification)).catch(next);
})

router.delete('/notifications/:id', (req, res, next) => {
    Notification.findByIdAndRemove({_id: req.params.id}).then( (notification) => res.send(notification));
})

router.put('/notifications/:id', (req, res, next) => {
    Notification.findByIdAndUpdate({_id: req.params.id}, req.body).then(()=> {
        Notification.findOne({_id: req.params.id}).then((notification) => res.send(notification))
    })
})


//Users routes
router.get('/users', (req, res) => {
    User.find({}).then(user => res.send(user));
});

router.post('/users', (req, res, next) => {
    User.create(req.body).then((user) => {res.send(user)}).catch(next);
})

router.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete({_id: req.params.id}).then((user) => res.send(user))
});
router.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(() =>{
        User.findOne({_id: req.params.id}).then((user) => res.send(user))
    }
)})


module.exports = router
