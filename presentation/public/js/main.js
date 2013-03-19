$(document).ready(function() {

    var socket = io.connect('http://141.163.232.165:8080');

         socket.on('connect', function () {
                console.log('connection Made');


                socket.on('change gravity', function () {
                        console.log('recivied Gravity socket');

                        Gravity.init();

                        setTimeout(function() {


                        Gravity.reset();

                        }, 10000);

                        

                });

                socket.on('disconnect', function () {

                });

            });

            $("#gravity").click(function() {

                    console.log('clicked gravity');

                    socket.emit('gravity');

            });

});

var Gravity = {

            init: function() {

                    $('#makefall').stop().animate({
                        marginTop: 400+"px"
                    }, {
                        duration: 1000,
                        easing: "easeOutBounce"
                    });
            },

            reset: function() {

                $('#makefall').stop().animate({

                        marginTop: "0px"
                    }, {
                        duration: 1000,
                        easing: "easeOutBounce"
                });

            }
}

