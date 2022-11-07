const express= require("express");
const bodyParser =  require('body-parser');
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json());

app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/adduser',(req,res)=>{
    res.render('adduser')
})

const userRoutes = require('./src/routes/user.route');

app.use('/api/v1/user',userRoutes);



app.listen(port,()=>{
    console.log(`server started on ${port}`)
})