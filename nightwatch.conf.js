var chromedriver = require('chromedriver');

const PKG = require('./package.json'); // so we can get the version of the project
const BINPATH = './node_modules/nightwatch/bin/'; // change if required.

const config = { // we use a nightwatch.conf.js file so we can include comments and helper functions
  "src_folders": [
    "test/e2e"     // we use '/test' as the name of our test directory by default. So 'test/e2e' for 'e2e'.
  ],
  "output_folder": "./node_modules/nightwatch/reports", // reports (test outcome) output by Nightwatch
  "selenium": {
    "start_process": true,
    "server_path": BINPATH + "selenium.jar", // downloaded by selenium-download module (see below)
    "log_path": "",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver" : chromedriver.path // also downloaded by selenium-download
    }
  },
  "test_workers" : {"enabled" : false, "workers" : "auto"}, // perform tests in parallel where possible
  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "127.0.0.1",
      "silent": true,
      "screenshots": {
        "enabled": false, // save screenshots taken here
      }, // this allows us to control the
      "globals": {
        "waitForConditionTimeout": 15000 // on localhost sometimes internet is slow so wait...
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": [
            '--proxy-server=socks5://127.0.0.1:9050',
            'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3',
            "--window-size=640,1136" // iphone 5
          ]
        },
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
module.exports = config;

/**
 * selenium-download does exactly what it's name suggests;
 * downloads (or updates) the version of Selenium (& chromedriver)
 * on your localhost where it will be used by Nightwatch.
 */
require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) { // got it?
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function(error) {
      if (error) throw new Error(error); // no point continuing so exit!
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});
