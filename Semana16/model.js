// user.js

class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    static findByCredentials(username, password) {
      // Implemente a lógica de busca no seu banco de dados
      // Neste exemplo, faremos uma busca simples em um array de usuários
      const users = [
        new User('user1', 'password1'),
        new User('user2', 'password2'),
      ];
  
      return users.find(user => user.username === username && user.password === password);
    }
  }
  
  module.exports = User;