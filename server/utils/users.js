[{
    id: 'jkjfksdjfklsa',
    name: 'Tiago',
    room: 'The room'
}]

//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
    constructor(){
        this.users = [];
    }

    addUser(id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        //catch the user
        var user = this.getUser(id);
        if (user) {
            //create a new obj without the user found before 
            this.users = this.users.filter((user) => user.id !== id)
        }
        //return the user found and remove lines up above
        return user;
    }

    getUser(id){
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList(room){
        var users = this.users.filter((user) => user.room === room);
        //users é um array de objetos, usar o map transformar em um OBJ só com os nomes
        var namesArray = users.map((user) => user.name);
        return namesArray;
    }
}

module.exports = { Users }