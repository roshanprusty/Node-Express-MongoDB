const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Sample student data
const students = [
    { name: 'John Doe', age: 20, id: 1 },
    { name: 'Jane Smith', age: 22, id: 2 },
    // Add more student data if needed
];

// Endpoint to handle client requests for student data
app.get('/students', (req, res) => {
    console.log('Received request from client.');
    res.json(students);
});

// Function to emit even numbers to the client
function sendEvenNumbers(socket) {
    let count = 0;
    const interval = setInterval(() => {
        count += 2;
        socket.emit('evenNumber', count);
    }, 2000);

    // Stop sending even numbers when the client disconnects
    socket.on('disconnect', () => {
        clearInterval(interval);
        console.log('Client disconnected. Thank you!');
    });
}

// Socket.io connection handling
io.on('connection', (socket) => {
    console.log('Client connected.');
    sendEvenNumbers(socket);
});

// Start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
