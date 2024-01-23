// script.js
const socket = io();

const messages = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.emit('chat message', { msg: message, user: 'Usuário', timestamp: new Date().toISOString() });
    messageInput.value = '';
});

// script.js
socket.on('chat message', (data) => {
    const messageElement = document.createElement('div');

    // Cria elementos <pre> e <code> para manter a formatação do texto
    const preElement = document.createElement('pre');
    const codeElement = document.createElement('code');
    codeElement.textContent = `${data.user} [${data.timestamp}]: ${data.msg}`;

    // Adiciona o elemento <code> dentro do <pre> e, em seguida, adiciona ao messageElement
    preElement.appendChild(codeElement);
    messageElement.appendChild(preElement);

    messages.appendChild(messageElement);

    // Rolagem automática para a parte inferior
    messages.scrollTop = messages.scrollHeight;
});
