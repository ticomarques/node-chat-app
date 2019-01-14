var socket = io();

socket.on('connect', () => {
    console.log('connected to the server');

    socket.emit('createMessage', {
        from: 'Andrew',
        text: 'Yup. It works for me.'
    });
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
    console.log('newMessage: ', message);
});