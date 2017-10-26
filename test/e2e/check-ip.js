var conf = require('../../nightwatch.conf.js');
var shell = require('shelljs');
const SITE = 'https://www.iplocation.net/find-ip-address';

module.exports = {
  'click skyp ads': function (browser) {

    for(var i=0;i<100;i++){

      browser
        .url(SITE)   // visit the url
        .pause(5*1000); // some delay ater click

        var command = shell.exec('./sh/signal_change_ip_single.sh');
        console.log(command);

    }

    browser.end();
  }
};
