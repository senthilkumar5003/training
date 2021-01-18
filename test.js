var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/list_user', function (req, res) {
   res.send('Page Listing');
})

app.get('/add_user', function (req, res) {
   res.sendFile(__dirname + "/template/userForm.html");
})

app.post('/add_user', urlencodedParser, function (req, res) {
	response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

var server = app.listen(8085, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})