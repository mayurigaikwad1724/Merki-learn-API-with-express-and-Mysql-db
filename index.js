const express=require("express")
const app=express();
const bodyparser=require("body-parser")
const port=8000;
const router=require("./Routes/user")



app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use('/',router)

app. listen(port,()=>{
    console.log(`http://localhost ${port}`)
})

