'use strict';

var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/angular',express.static(path.join(__dirname, 'node_modules/angular')));

app.get('*', function(req, res) {
    res.sendFile('/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(2319, function(){
    console.log('Our app is listening on port 2319!');
});