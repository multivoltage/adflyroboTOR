var conf = require('../../nightwatch.conf.js');
var adfly_url = 'http://bluenik.com/14E';
var shell = require('shelljs');

module.exports = {
  'click skyp ads': function (browser) {

    for(var i=0;i<2;i++){


      browser
        .url(adfly_url)   // visit the url
        .waitForElementVisible('#skip_ad_button',20*1000)
        .click('#skip_ad_button',function(response){
          // we have clicked

        })
        .pause(5*1000); // some delay ater click

        var command = shell.exec('./sh/signal_change_ip_single.sh');
        console.log(command);

    }

    browser.end();
  }
};
