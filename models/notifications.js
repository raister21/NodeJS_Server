const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    poster: {
        type: String,
        required: [true,'Poster of the notification required']
    },
    post: {
        type: String,
        required: [true,'Post cannot be empty']
    },
    time: {
        type: Date,
    },

    posterId: {
        type: String,
        required: [true,'Cannot be empty'] 
    }
});

const Notification = mongoose.model('notification',NotificationSchema)

module.exports = Notification;