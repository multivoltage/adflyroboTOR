var shell = require('shelljs');

var TOR_PATH = "./tor-browser_en-US/Browser/TorBrowser/Tor/tor";
const my_torrc_file = './tor_conf/my-torrc';
var password = "stupid_password";

module.exports = {
  generateHashPwd: function() {
    console.log('try to generate hash for password '+password);
    var command = shell.exec(TOR_PATH+' --hash-password '+password,{silent:true});
    if (command.code !== 0) {
      shell.exit(1);
      console.log('error generating hash password');
    } else {
      return command.stdout;
    }
  }
};
