var shell = require('shelljs');

for(var i=0;i<10;i++){

  var change_ip_cmd = shell.exec('./sh/signal_change_ip_single.sh',function(code, stdout, stderr){
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
  });
  console.log('NEW IP IS -> '+change_ip_cmd);

  var command = 'npm run skip-adfly';
  shell.exec(command);
}
