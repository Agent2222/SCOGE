const { createServer } = require('http');
const { Server } = require('socket.io');

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: 'https://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('newMessage', (data) => {
    const { roomName, message } = data;
    console.log(`New message in room ${roomName}: ${message}`);

    // Broadcast the message to all clients
    io.emit('newMessage', {roomName, message});
  });

  const players = {};

  socket.on('players', (data) => {
    const { roomId, playerId, playerData } = data;
    if (!players[playerId]) {
      players[playerId] = { roomId };
    }
    players[playerId] = { ...players[playerId], ...playerData };
    socket.to(roomId).emit('playerUpdate', players);
    console.log(`New message in room ${roomId}: ${playerId}`);
    // Broadcast the message to all clients
    io.emit('players', data);
    console.log('players', players);
  });

  // Other event handlers...
});

// httpServer.listen(3001, () => {
//   console.log('Socket.IO server listening at http://localhost:3001');
// });
const port = 3001;
httpServer.listen(port, () => {
  console.log(`Socket.IO server listening at http://localhost:${port}`);
});
