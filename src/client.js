const io = require('socket.io-client');
const readline = require('readline');
const os = require('os');

// Conecta ao servidor
const socket = io('http://192.168.3.117:3000');
const username = os.hostname(); // Obtém o nome do computador

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para formatar a data e hora
function formatarDataHora() {
  const agora = new Date();
  return `${ agora.getDate().toString().padStart(2, '0') }/${ (agora.getMonth() + 1).toString().padStart(2, '0') }/${ agora.getFullYear().toString().slice(-2) } às ${ agora.getHours().toString().padStart(2, '0') }:${ agora.getMinutes().toString().padStart(2, '0') }`;
}

rl.on('line', (input) => {
  socket.emit('chat message', { msg: input, user: username, timestamp: formatarDataHora() });
});

socket.on('chat message', (data) => {
  console.log(`${ data.user } [${ data.timestamp }]: ${ data.msg }`);
});
