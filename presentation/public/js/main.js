$(function() {

    var socket = io.connect('http://192.168.0.20:8080');
    
            socket.on('connect', function () {

                     
                socket.on('event', function (data) {

                    
                });

                socket.on('disconnect', function () {

                });

            });

            // $("#moveSelect").click(function() {

            //         window.location = '/move';
                   
            //  });


});