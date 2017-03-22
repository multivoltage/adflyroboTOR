var shell = require('shelljs');

const TOR_BROWSER_WGET_URL = 'https://www.torproject.org/dist/torbrowser/6.5.1/tor-browser-linux64-6.5.1_en-US.tar.xz';
const filename_tor_browser = 'tor-browser-linux64-6.5.1_en-US.tar.xz';
const my_torrc_file = './tor_conf/my-torrc';

function init(){
  if(!isAllToolsAvailable())
    return;

  if(!isTorBrowserDownloaded())
    return;

  if(!isTorCorrectlyExtracted())
    return;

}

function isTorBrowserDownloaded(){
  // Run external tool synchronously
  console.log('try to download tor browser from '+TOR_BROWSER_WGET_URL);
  if (shell.exec('wget '+TOR_BROWSER_WGET_URL).code !== 0) {
    console.log('cannot download tor browser correctly. Check connection or valid url');
    shell.exit(1);
    return false;
  }
  return true;
}

function isAllToolsAvailable(){
  if (!shell.which('sh')) {
    shell.echo('please install sh before run this app');
    shell.exit(1);
    return false;
  }
  if (!shell.which('nc')) {
    shell.echo('please install nc before run this app');
    shell.exit(1);
    return false;
  }
  if (!shell.which('curl')) {
    shell.echo('please install curl before run this app');
    shell.exit(1);
    return false;
  }
  if (!shell.which('grep')) {
    shell.echo('please install grep before run this app');
    shell.exit(1);
    return false;
  }
  return true;
}

function isTorCorrectlyExtracted(path){
  console.log('I am extracting tor browser into folder');
  if (shell.exec('tar xf '+filename_tor_browser).code !== 0) {
    console.log('cannot execute tar xf of '+filename_tor_browser);
    shell.exit(1);
    return false;
  }
  return true;
}
init();
