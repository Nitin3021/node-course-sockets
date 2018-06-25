var socket = io();

socket.on('connect',  function () {
  console.log('Connected to Server');

  // socket.emit('createEmail', {
  //   to: 'kris@yahoo.com',
  //   text: 'This is me!!'
  // });

  socket.emit('createMessage', {
    from: 'you@you.com',
    text: 'youyou'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from Server!');
});

// socket.on('newEmail', function (email) {
//   console.log('New Email', email);
// });

socket.on('newMessage', function(message) {
  console.log('New Message:', message);
});
