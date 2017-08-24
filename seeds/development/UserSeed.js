var faker = require('faker');

module.exports = function(done) {

  var data = [{
    id : faker.random.number(),

    username: faker.internet.userName(),

    email: faker.internet.email(),

    encryptedPassword: {
      type: 'thepassword'
    },

    posts: [1,2],
  }];

  //remember to tell when your are done
  done(null, data);
};
