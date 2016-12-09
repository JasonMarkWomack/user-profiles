var express = require('express');
var session = require('express-session');
var cors = require('cors');
var bodyParser = require('body-parser');

var config = require('./config.js');
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var port = 8999;
var app = express();

var corsHost = {
    origin: 'http://localhost:8999'
};


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsHost));
app.use(session({secret:config.sessionSecret}));

// function (req, res ,next){

// 		res.status(200).json(login);
//
// console.log(res);
// }


app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getFriends);


app.listen(port, function() {
	console.log('listening on ' + port);
});

/*app.get("/exam", function(req, res, next){

	res.status(200).json("this fool!")


})

app.post("/yourpath/id", function(req,res,next){
	res.status(200).json(req.body.name);

})
app.listen(port);*/
