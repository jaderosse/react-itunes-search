var express = require('express');
var request = require('request');
var app = express();

app.use(express.static(__dirname + '/public/'));

app.get('/api/search', function(req, res) {
  request({
    url: 'https://itunes.apple.com/search',
    qs: {term: req.query.term}
  }, function(err, response, data) {
    res.send(JSON.parse(data));
  });
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
