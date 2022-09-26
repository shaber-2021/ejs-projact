const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

let  gada =[];

app.set('view engine','ejs')

app.post('/',(req,res)=>{
   const language = req.body.planguage;
    gada.push(language)
   res.redirect('/')
})


app.get('/',(req,res)=>{
    res.render('index',{shaber : gada})
})

app.get('/contact',(req,res)=>{
    res.render('contact',{ })
})



app.listen(port,()=>{
    console.log(`your server is raning http://localhost:${port}`)
})