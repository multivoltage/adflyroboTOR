var conf = require('../../nightwatch.conf.js');
const publicIp = require('public-ip');

module.exports = {
  'click skyp ads': function (browser) {

    for(var i=0;i<3;i++){
      publicIp.v4().then(ip => {
        console.log('using ip: '+ip);
        //=> '46.5.21.123'
      });

      browser
        .url('https://check.torproject.org/')   // visit the url
        //.waitForElementVisible('#skip_ad_button',function(){
        //  console.log('skip is visible');
        //})
        //.click('#skip_ad_button');
        .pause(13*1000)
    }

    browser.end();
  }
};
