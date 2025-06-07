const express = require('express');
const { createServer } = require('node:http')
const { Server} = require('socket.io')

const app = express();
const server = createServer(app)
const io = new Server(server)

const port = 3000;
const cors = require('cors');
const initialRoutes = require('./routes/initial.routes');

const corsOptions = {
  origin: '*', // Orígenes permitidos (cuando esté en un dominio real, lo cambiaremos por ese dominio)
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', initialRoutes);

io.on('connection', (socket) => {
  console.log(`Usuario conectado: ${socket.id}`);

  socket.on('message', (data) => {
    io.emit('messageEmited', data)
  })

  socket.on('disconnect', () => {
    io.emit('disconnectedMessage', `Usuario desconectado: ${socket.id}`)
    console.log(`Usuario desconectado: ${socket.id}`);
    
  })
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
