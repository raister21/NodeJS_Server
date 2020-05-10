const express = require('express')
const router = express.Router();
const User = require('../models/users').default
const Notification = require('../models/notifications')
const Note = require('../models/notes')

//notifications routes
router.get('/notifications', (req, res, next) => {
    Notification.find({}).then((notification) => {
        console.log('Sent notifications');
        res.send(notification);
    });
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

//Notes routes
// router.get('/notes/:noteid',(req, res) => {
//     Note.find({noteID: req.params.noteid}).then(note => {
//         console.log("note only")
//         res.send(note)
//     }).then(next)
// }) 
router.get('/notes',(req, res, next) => {
    Note.find({}).then(note => {
        console.log("note all");
        res.send(note);
    }).then(next)
})

router.post('/notes',(req,res, next) => {
    Note.create(req.body).then((note) => {res.send(note)}).catch(next)
})

router.delete('/notes/:id', (req, res) => {
    User.findByIdAndDelete({_id: req.params.id}).then((user) => res.send(user))
});



module.exports = router
