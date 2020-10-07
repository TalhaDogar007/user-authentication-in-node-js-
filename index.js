var express = require('express');
var bodyParser = require("body-parser");
const sequelize =require('./database')
const cookieParser = require('cookie-parser');
const login = require('./routes/login');
const signup = require('./routes/signup');
const dashboard = require('./routes/dashboard');


var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));



app.set('view engine', 'ejs');


app.use('/login', login);
app.use('/signup', signup);
app.use('/dashboard', dashboard);
app.use('/logout', login);


app.get('/',(req, res, next) => {
   
    res.render('home');
    
});

app.get('/*', (req, res, next) => {
   
    res.send("page not found");
    
});

sequelize.sync().then(
    result => {
        console.log("table created");
        app.listen(3000, function () {
            console.log('Example app listening on port 3000!')
        });  
    }
).catch(err =>{
    console.log(err);
})


