const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Teddy',
            room: 'Node course'
        },{
            id: '2',
            name: 'PinPin',
            room: 'React course'
        },{
            id: '3',
            name: 'Jen',
            room: 'Node course'
        }]
    });

    it('Should add a new user', () => {
        var users = new Users();
        var user = {
            id: '123a',
            name: 'Tiago',
            room: 'dev'
        }
        users.addUser(user.id, user.name, user.room);
        expect(users.users[0]).toMatchObject(user);
    });

    it('It should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('It should not remove a user', () => {
        var userId = '9999999999';
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('It should find a user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('It should not find a user', () => {
        var userId = '9999999';
        var user = users.getUser(userId);

        expect(user).toBeFalsy();
    });


    it('It should return names for node course', () => {
        //Abaixo poderia chamar new User, mas preferi usar a chamada já existente da linha 9 dentro do beforeEach
        //Assim são menos instancias, usando menos memoria > var userList = new User().getUserList('Node course');
        var userList = users.getUserList('Node course');

        expect(userList.length).toBe(2);
    });

    it('It should return names for React course', () => {
        //Abaixo poderia chamar new User, mas preferi usar a chamada já existente da linha 9 dentro do beforeEach
        //Assim são menos instancias, usando menos memoria > var userList = new User().getUserList('Node course');
        var userList = users.getUserList('React course');

        expect(userList.length).toBe(1);
    });
});