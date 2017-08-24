/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  connection: 'someMysqlServer',
  attributes: {
    id : {
      type: 'integer',
      unique: 'true',
      primaryKey: true
    },
    user: {
      model: 'user'
    },
    description :
    {
      type: 'string',
    }
  }
};

