/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  users: function (req, res) {
    User.find({}).populate('posts').exec(function (err, users){
      if (err) {
        return res.serverError(err);
      }
      return res.json({
        users: users
      });
    });
  },
};

