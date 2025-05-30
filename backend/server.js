 require('dotenv').config();
const app = require('./src/app.js');


app.listen(3000, function(){
   console.log("Server is running ")
});