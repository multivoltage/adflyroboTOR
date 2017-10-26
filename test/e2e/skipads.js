var adfly_url = 'http://bluenik.com/14E';

module.exports = {
  'click skyp ads': function (browser) {

      browser
        .url(adfly_url)
        .pause(10*1000)
        .element('css selector','.recaptcha-checkbox-checkmark',function(res){
            if(res.value && res.value.ELEMENT){
              console.log('FOUND CAPTCHA BUTTON');
              browser.end();
            } else {
              browser
                .waitForElementVisible('.mwButton',10*1000)
                .click('.mwButton')
                .pause(5*1000)
                .end();
            }
        });
  }
};
