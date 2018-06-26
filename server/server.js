const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/Message');
const publicPath = path.join(__dirname, '/../public');
var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected!');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the Chat App!'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined!'));

  socket.on('createMessage', (message) => {
    console.log('Create Message:', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started server on ${port}`);
});
