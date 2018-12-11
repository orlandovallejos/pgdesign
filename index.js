var express = require('express')
var app = express()

app.use('/css', express.static(__dirname + '/css'));
app.use('/icon-fonts', express.static(__dirname + '/icon-fonts'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/vendor', express.static(__dirname + '/vendor'));

app.use('/index.html', express.static(__dirname + '/index.html'));
app.use('/about.html', express.static(__dirname + '/about.html'));
app.use('/contact.html', express.static(__dirname + '/contact.html'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
})

var server = app.listen(62226, function () {

  console.log(__dirname);
    // var host = server.address().address
    // var port = server.address().port

    // console.log('Express app listening at http://%s:%s', host, port)

})