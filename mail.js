var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));

var mandrill = require('node-mandrill')('72960ad4bfa9c99ffe284abc7d8cd8a7-us16'); 

function sendEmail ( _name, _email, _message) {
    mandrill('/messages/send', {
        message: {
            to: [{email: 'mahto.sanjay41@gmail.com' , name: 'Sanjay Kumar Mahto'}],
            from_email: _email,
            text: _message
        }
    }, function(error, response){
        if (error) console.log( error );
        else console.log(response);
    });
}

// define your own email api which points to your server.

app.post( '/api/sendemail/', function(req, res){

    var _name = req.body.name;
    var _email = req.body.email;
    var _message = req.body.message;

    //implement your spam protection or checks. 

    sendEmail ( _name, _email, _message );

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});