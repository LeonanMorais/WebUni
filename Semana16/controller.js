// UserController.js

const User = require('../models/user');

const UserController = {
  login(req, res) {
    const { username, password } = req.body;

    const user = User.findByCredentials(username, password);

    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  },
};

module.exports = UserController;