const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/user_test",).then(()=>{
    console.log('connection succ');
}).catch((e)=>{
    console.log('no connection');

})