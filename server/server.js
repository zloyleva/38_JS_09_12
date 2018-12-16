const express = require('express');
const app = express();

const md5 = require('js-md5');

const sqlite3 = require('./modules/DbConnection');
const db = sqlite3().getInstance;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});


const login = require('./routes/login');
const users = require('./routes/users');
const products = require('./routes/products');

app.use('/login',login);
app.use('/users',users);
app.use('/products',products);


app.get("/", (req, res) => {
    res.json({data: "Hello World"});
});


app.listen(9000, (err) => {
    console.log("Run server...")
});
