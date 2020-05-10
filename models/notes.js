const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NoteSchema = Schema({ 
    noteID: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
});

const Note = mongoose.model('note',NoteSchema)

module.exports = Note