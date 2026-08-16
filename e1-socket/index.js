import express from 'express';
import {createServer} from 'node:http';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path'
import {Server} from 'socket.io'

const app = express();
const server = createServer(app);
const io = new Server(server); // pasamos el objeto server

const __dirname = dirname(fileURLToPath(import.meta.url));


app.get('/', (req, res)=>{
    // res.send('<h1> Hola mundo </h1>');
    res.sendFile(join(__dirname,'index.html'));
});

// io.on('connection', (socket)=>{
//     console.log('un usuario se conecto');
// })

// io.on('connection', (socket) => {
//     console.log('un usuario se conectó');
    
//     socket.on('disconnect', () => {
//         console.log('usuario desconectado');
//     });
// });

io.on('connection', (socket)=>{
    socket.on('chat message',  (msg)=>{
        console.log('mensaje: '+msg)
        io.emit('chat message', msg) // envia al cliente los mensajes recibidos
    })

})

server.listen(3000, () => {
    console.log('server corriendo en http://localhost:3000');
});