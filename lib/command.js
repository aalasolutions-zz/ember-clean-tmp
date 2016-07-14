/* jshint node: true */
'use strict';
module.exports = {
  name: 'clean',
  aliases: [],
  description: 'Clean tmp folder.',
  works: 'insideProject',
  run: function (options, rawArgs) {
    var RSVP = require('rsvp');
    return new RSVP.Promise(function (resolve, reject) {
      try {
        var util = require('util');
        var colors = require('colors');
        var exec = require('child_process').exec;
        var cmd = '';

        var isWin = /^win/.test(process.platform);

        if(!isWin){
          cmd = 'rm -rf tmp/*';
        }else{
          cmd = 'RMDIR tmp /Q /S && MKDIR tmp';
        }
        exec(cmd, function (error, stdout, stderr) {
          console.log(stdout);
          if (error) {
            console.log('#### Error in cleaning project: ' + error + '\n' + stderr);
            reject(error);
          } else {
            console.log(colors.rainbow('Temp folder is now cleaned ') + colors.red(' >>> http://aalasolutions.com <<<'));
            resolve();
          }
        });
      } catch (err) {
        console.log('#### Error in cleaning project: ' + err);
        reject(err);
      }
    });
  }
};
