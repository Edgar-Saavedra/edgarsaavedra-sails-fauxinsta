var faker = require('faker');

module.exports = function(done) {

  var data = [{
    id : 1,
    user: 1,
    description : faker.lorem.paragraph()
  },{
    id : 2,
    user: 1,
    description : faker.lorem.paragraph()
  }];

  //remember to tell when your are done
  done(null, data);
};
