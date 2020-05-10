const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const NotificationSchema = new Schema({
    poster: {
        type: String,
        required: [true]
    },
    post: {
        type: String,
        required: [true,'Post cannot be empty']
    },
    time: {
        type: Date,
    }
});

const Notification = mongoose.model('notification',NotificationSchema)

module.exports = Notification;