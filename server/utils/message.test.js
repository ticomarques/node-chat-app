var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('it should generate the correct message object', () => {
        var from = 'Jen';
        var text = 'Hello there!'
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);

        //or above instead 2 lines of code
        //expect(message).toMatchObject({from, text});


    });
});


describe('generateLocationMessage', () => {
    it('it should generate the correct location object', () => {
        var from = 'Jen';
        var longitude = 1;
        var latitude = 1;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBe(from);
        expect(message.url).toBe(url);
    });
});