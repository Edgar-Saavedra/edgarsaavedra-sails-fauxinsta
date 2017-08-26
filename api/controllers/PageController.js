/**
 * PageController
 *
 * @description :: Server-side logic for managing Pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `PageController.home()`
   */
  home: function (req, res) {
    return res.view('Page/home', {
      user: null
    });
  },


  /**
   * `PageController.logout()`
   */
  logout: function (req, res) {
    return res.json({
      req : req,
      todo: 'logout() is not implemented yet!'
    });
  },


  /**
   * `PageController.profile()`
   */
  profile: function (req, res) {
    return res.json({
      todo: 'profile() is not implemented yet!'
    });
  },


  /**
   * `PageController.signin()`
   */
  signin: function (req, res) {
    return res.json({
      todo: 'signin() is not implemented yet!'
    });
  },


  /**
   * `PageController.signup()`
   */
  signup: function (req, res) {
    return res.json({
      todo: 'signup() is not implemented yet!'
    });
  },


  /**
   * `PageController.editProfile()`
   */
  editProfile: function (req, res) {
    return res.json({
      todo: 'editProfile() is not implemented yet!'
    });
  }
};

