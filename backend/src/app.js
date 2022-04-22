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

app.get("/",(req,res)=>{
    res.render("server work")
})
app.get(".register",(req,res)=>{
    res.render("register");
})

app.post("/register", async (req,res)=>{
    try{
        console.log(req.body.email)
        res.send(req.body.email)

    }catch(e){
        res.status(400).send(error);

    }
})
app.listen(port, () =>{
    console.log('server run at port ' +port);
})

 