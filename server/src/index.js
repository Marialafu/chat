const server = HTMLOutputElement.createServer();
const port = 3000

const corsOptions = {
  origin: '*', // Orígenes permitidos (cuando esté en un dominio real, lo cambiaremos por ese dominio)
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
};

const io = require('socket.io')(server, {...corsOptions})

io.on('connection', (socket) => {
  console.log(`Usuario conectado: ${socket.id}`);

  // socket.on('message', (data) => {
  //   io.emit('messageEmited', data)
  // })

  // socket.on('disconnect', () => {
  //   io.emit('disconnectedMessage', `Usuario desconectado: ${socket.id}`)
  //   console.log(`Usuario desconectado: ${socket.id}`);
    
  // })
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.listen(port)
