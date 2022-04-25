const mongoose = require('mongoose')

const users_schema = new mongoose.Schema({
    
email:{
    type: String
},
password:{
    type: String
},
name:{
    type: String
},

})

const Register = new mongoose.model("Register", users_schema);
module.exports=Register;
