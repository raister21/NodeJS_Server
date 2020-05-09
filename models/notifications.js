const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    staffName: {
        type: String,
        required: [true]
    },
});

const NotificationSchema = new Schema({
    poster: [
        StaffSchema
    ],
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