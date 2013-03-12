    var express = require('express'),
        app = express(),
        server = require('http').createServer(app),
        io = require('socket.io').listen(server, { log: true });

    server.listen(8080);


    app.configure(function() {

            app.use(express.static(__dirname + '/public'));

    });


    // app.get('/look', function (req, res) {

    //         res.sendfile(__dirname + '/look.html');

    // });

    app.get('/', function (req, res) {

            res.sendfile(__dirname + '/index.html');

    });



    io.sockets.on('connection', function (socket) {

        
        socket.on('event', function (data) {

        });



    });
