/**
 * Tags.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  		name:{
  			type: 'string',
  			primaryKey: true
  		},
  		tagged:{
  			collection: 'user',
  			via: 'pd' /*Personal description*/
  		},
  		tag_event:{
  			collection:'event',
  			via: 'event_tags'
  		}
  }
};

