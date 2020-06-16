const express = require('express');
const server = express();

//configurar caminhos da minha aplicação

//pagina inicial
//req = requisição
//res = resposta
server.get('/', (req, res) => {
  res.send('HHellow Word ');
});

//ligar o servidor
server.listen(3000);
