# Network Chat

## Sobre o Projeto

Este é um projeto simples de chat via rede que permite a comunicação em tempo real entre usuários na mesma rede Wi-Fi. Utiliza Node.js, Express e Socket.io para estabelecer uma conexão de soquete entre os clientes e o servidor.

## Pré-Requisitos

Antes de começar, você precisa ter o Node.js instalado em seu sistema. Se você ainda não tem o Node.js, pode baixá-lo e instalá-lo a partir de [nodejs.org](https://nodejs.org/).

## Instalação

Para instalar as dependências do projeto, siga estes passos:

1. Clone o repositório ou faça o download dos arquivos do projeto para o seu computador.

2. Abra um terminal e navegue até a pasta do projeto.

3. Execute o comando abaixo para instalar todas as dependências necessárias:
   ```
   npm install
   ```

## Configuração

Antes de iniciar o servidor e os clientes, é necessário configurar o IP no `client.js` caso você planeje usar o chat em múltiplos dispositivos na mesma rede Wi-Fi.

1. Encontre o endereço IP do computador que irá hospedar o servidor. Isso pode ser feito por meio das configurações de rede do seu sistema operacional ou usando comandos como `ipconfig` (Windows) ou `ifconfig` (Unix/Linux).

2. No arquivo `client.js`, substitua `'http://localhost:3000'` pelo endereço IP do servidor. Por exemplo, se o IP for `192.168.1.5`, a linha no `client.js` deve ser alterada para:
   ```javascript
   const socket = io('http://192.168.1.5:3000');
   ```

## Execução

Para executar o servidor e o cliente, use os comandos definidos no `package.json`.

### Iniciando o Servidor

Abra um terminal na pasta do projeto e execute o seguinte comando para iniciar o servidor:

```
npm run server
```

Este comando iniciará o servidor do chat na porta 3000.

### Iniciando o Cliente

Para iniciar um cliente do chat, abra um novo terminal (diferente do que está rodando o servidor) na pasta do projeto e execute:

```
npm run client
```

Você pode abrir vários terminais e executar este comando em cada um para simular múltiplos usuários.

## Uso

Após iniciar o servidor e os clientes, você pode digitar mensagens no terminal do cliente e elas serão exibidas em todos os outros terminais de clientes conectados ao servidor. As mensagens incluem o nome do usuário (ou hash, se configurado dessa forma) e a hora em que a mensagem foi enviada.

---

### Autor

- rbmelolima
