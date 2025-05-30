const express = require("express");
const app = express();
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');
// const axios = require('axios');
app.use(express.json());
app.use(cors())
// app.use(axios())
app.get('/', function(req, res){
    res.send("Dummy route")
})

app.use('/ai', aiRoutes);


module.exports = app;