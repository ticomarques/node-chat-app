var expect = require('expect');

var {generateMessage} = require('./message');

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