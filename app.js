const fetch=require('node-fetch')
const express = require('express')
const app = express()
const hbs = require('express-handlebars');
const port = 8000;
app.use(express.static('public'))
app.engine('handlebars', hbs.engine({
    defaultLayout: 'main',
    helpers:{
    }
}));
app.use(express.urlencoded())
app.set('view engine', 'handlebars');
app.get('/', (req, res) =>{
    res.render("index")
})
app.listen({port})