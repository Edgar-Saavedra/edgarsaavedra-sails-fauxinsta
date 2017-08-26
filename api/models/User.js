/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: 'true',
  attributes: {
    id : {
      type: 'integer',
      unique: 'true',
      primaryKey: true
    },
    username: {
      type: 'string',
      unique: 'true'
    },
    email: {
      type: 'string',
      email: 'true',
      unique: 'true'
    },
    encryptedPassword: {
      type: 'string'
    },
    posts: {
      collection: 'post',
      via: 'user'
    },

  }
};

