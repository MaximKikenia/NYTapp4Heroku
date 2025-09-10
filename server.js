const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'))
});

app.listen(process.env.PORT || 3000, function(){console.log("Сервер удачно запущен на: http://localhost:3000/");});
