const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const PORT = process.env.PORT||3000;

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));


app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/weather',(req,res)=>{
    res.render('weather');
});
app.get('*',(req,res)=>{
    res.render('404error',{
        errorMessage : 'Opps Page Not Found!!'
    });
});

app.listen(PORT,()=>{
    console.log(`listening to port number ${PORT}`);
});