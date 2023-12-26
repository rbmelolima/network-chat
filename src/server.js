const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Configuração do servidor
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Quando um cliente se conecta
io.on('connection', (socket) => {
  console.log('Novo usuário conectado');

  // Escuta por mensagens
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Envia a mensagem para todos
  });

  // Quando um usuário se desconecta
  socket.on('disconnect', () => {
    console.log('Usuário desconectou');
  });
});

// Inicia o servidor
server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
