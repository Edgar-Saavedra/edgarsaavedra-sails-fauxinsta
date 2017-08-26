/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    id : {
      type: 'integer',
      unique: 'true',
      primaryKey: true,
    },
    imgUrl: {
      type: 'string',
      unique: 'true'
    },
    description :
    {
      type: 'string',
    },
    user: {
      model: 'user'
    }
  }
};

