const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const path = require('path')
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Mysql Connection

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'register'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Mysql Connected...');
});

//Serve the registration form
app.get('/',(req,res) => {
    res.render('index');
});

// Handle the submission

app.post('/register',(req,res) => {
    const {name,email,password} = req.body;
    const sql = 'INSERT INTO users (name,email,password) VALUES (?,?,?)';
    connection.query(sql,[name,email,password], (err,result) => {
        if(err) {
            console.log('ERROR:', err);
            res.json({success: false});
        }else{
            res.json({success: true});
        }
    });
});

app.listen(3000, () => {
    console.log('Serer is running on port 3000');
});