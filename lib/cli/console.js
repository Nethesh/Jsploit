var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Jsploit > ');
rl.prompt();

rl.on('line', function(line) {
  console.log('in test sorry');
  rl.prompt();
}).on('close', function() {
  console.log('Have a great day!');
  process.exit(0);
});