'use strict';

module.exports = [
  {
    test: /^moo$/,
    handler: 'moo'
  }, {
    level: 'friend',
    test: /^ping$/,
    handler: 'pong'
  }, {
    test: /^[!/\\]note/,
    handler: require('./notes')
  }
];