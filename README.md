# What is it

This app is an example to show combinated use of tor network and nightwatch together. App open url of adly, try to click on banner and then request a new IP to tor network.

# Install

You can use app out of the box. Only node is reuired and chrome installed
```javascript
$ npm install
$ npm run setup
$ npm start
```
After npm install, postinsall try do download selenium and chromedriver

### npm run setup does:
 * download tor browser with wget
 * extract it and deleted previus downloaded file
 * give 755 permission to sh script files

### npm start does
 * start nightwatch at specific url (change it on "test(e2e/skipads.js"
 * wait for skip button and click it
 * wait 5s and then make a request to tor network for change IP

### This is only and experiment. Please be attenction
