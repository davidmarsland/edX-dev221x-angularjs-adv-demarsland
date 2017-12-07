'use strict';

var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use('/app', express.static(path.join(__dirname,'app')));
app.use('/appcore', express.static(path.join(__dirname,'app/core')));
app.use('/angular', express.static(path.join(__dirname,'node_modules/angular')));
app.use('/angularroute', express.static(path.join(__dirname,'node_modules/angular-route')));
app.use('/bootstrap', express.static(path.join(__dirname,'node_modules/bootstrap/dist')));

app.use(function(req,res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

var server = app.listen(4000, function(){
    var port = server.address().port;
    console.log('listening on port: ' + port); 
});