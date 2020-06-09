const express = require('express');
const bodyParser = require('body-parser');
const mySql = require('mySql');

const app = express();

app.use(bodyParser.json());

const portListener = 3250;


const conn = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'polikoo'
});
conn.connect(err=>{
    if(err)
    return console.log('Connection is faield');
    return console.log('Connected');
})


app.get('/', (req, res)=>{
    res.send('پولي کو');
});

app.post('/createAccount', (req, res)=>{
    const data = {
        username: req.body.username, 
        password: req.body.password,
        naturalcode: req.body.naturalcode,
        ipaddress: req.body.ipaddress
    }
    const cmd = 'INSERT INTO accounts SET ?'
    const exec = conn.query(cmd, data, (err, results) => {
        if(err)
        return res.send('err');
        return res.send(results);
    });
});

app.post('/login', (req, res) => {
    const cmd = `select * from accounts WHERE username like "%${req.body.username}%" and password like"%${req.body.password}%" ` ;
    const exec = conn.query(cmd, (err, results)=>{
        if(err)
        return res.send('err');
        return res.send(results);
    });
});

app.listen(portListener, ()=>{
    console.log(`Your port is ${portListener}`);
});