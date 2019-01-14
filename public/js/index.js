var socket = io();

socket.on('connect', () => {
    console.log('connected to the server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
    console.log('newMessage: ', message);
});