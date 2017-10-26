var pwdGenerator = require('./hashPwdGenerator.js');
var fs = require('fs');
var shell = require('shelljs');

// command full ./tor-browser_en-US/Browser/TorBrowser/Tor/tor
const MY_TORRC_FILE = './tor_conf/my-torrc';
const tor = './tor-browser_en-US/Browser/TorBrowser/Tor/tor';

function generateMyTorrcFile(pwd){
  var content = 'ControlPort 9151 \nHashedControlPassword '+pwd;
  fs.writeFile(MY_TORRC_FILE, content, function(err) {
      if(err) {
            console.log('cannot generate password for tor');
            console.log(err);
            return false;
      }
      console.log('my-torrc file generated :)');
      return true;
  });
}

function startBot(){
  var pwd = pwdGenerator.generateHashPwd();
  generateMyTorrcFile(pwd);
  if(!pwd)
    return;

    var command = shell.exec(tor+' -f '+MY_TORRC_FILE, {async:true,silent:true});
      command.stdout.on('data', function(data) {
      console.log(data);
      if(data.match('Bootstrapped 100%: Done')){
        // we are connected :)
        // start tedt
        //shell.exec('npm start');
        console.log('you can npw run test :)');
      }
    });
}

startBot();
