var faker = require('faker');

module.exports = function(done) {

  var data = [{
    id : 1,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    posts: [1,2],
    encryptedPassword: 'thepassword',
  }];

  //remember to tell when your are done
  done(null, data);
};
