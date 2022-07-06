const express = require('express');
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));
app.set('view engine', 'ejs');

const port = 4000;
app.listen(process.env.PORT || port, function () {
    console.log(`Running on port ${port}`);
})


app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})