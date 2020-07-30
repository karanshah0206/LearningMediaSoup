var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    
})

http.listen(port, () => {
    console.log('Listening On Port ' + port);
})