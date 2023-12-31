// importing express
const express = require('express');
const path = require('path');
// calling express
const app = express();

const PORT =process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname) + '/index.html');
});
app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname) + '/about.html');
});
app.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname)+'/about.html');
});
// creating server
app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});