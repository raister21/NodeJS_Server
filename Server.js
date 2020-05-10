const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//creating express
const app = express()

//connect to mongodb
mongoose.connect('mongodb://localhost/islington',{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
mongoose.Promise = global.Promise;

//middlewares
app.use(bodyParser.json())
app.use('/api', require('./routes/api'))
app.use((err, req, res, next) => {

    res.send({error: err.message});
})


//listening to port
var server = app.listen(8081,'192.168.1.70', () => {
    var host = server.address().address
    var port = server.address().port
    console.log("Listening at http://%s:%s", host, port)
})