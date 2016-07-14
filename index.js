/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-clean-tmp',
  includedCommands: function () {
    return {
      'clean': require('./lib/command')
    };
  },
  isDevelopingAddon: function () {
    return false;
  }
};
