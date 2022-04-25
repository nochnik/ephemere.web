const express = require("express")
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const Register=require('./register')

const static_path = path.join(__dirname,"../public");
//console.log(static_path)
app.use(express.json());
app.use(express.static(static_path));
app.use(express.urlencoded({extended:false}))

app.get(".register",(req,res)=>{
    try{
        
        

    }catch(e){
        res.status(400).send(error);

    }
    res.render("register");
})

app.post("/register", (req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.pass
        const name = req.body.name;
        console.log(email + name)

    }catch(e){
        res.status(400).send(error);

    }
})
app.listen(port, () =>{
    console.log('server run at port ' +port);
})

 