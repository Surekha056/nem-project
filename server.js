// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
let app = require('express')();
const path = require('path')

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html', function(err) {
        if(err){
            res.status(500).send(err);
        }
    })
});
var jsonData = {count: 12, message: 'hey'};
app.get('/data', function(req, res){
    res.json(jsonData);
});
let port = 3000;
app.listen(port, function(){
    console.log('listening on http://localhost:',port);
});