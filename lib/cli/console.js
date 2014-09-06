var readline = require('readline'),
    shotgun = require('shotgun'),
    // Create a new shotgun shell instance.
    shell = new shotgun.Shell({ debug: true }),
    // Store the currently active user.
    currentUser = "guest",
    // Store each user's context data here.
    contexts = {
        guest: {},
        joe: {}
    };

var colors = require('colors');

// Use node's core readline library to create a looping prompt for user input.
var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("Jsploit > ");
shell
    .on('switchExploit', function (exploit, currentUserContext) {
        // Set prompt string so it includes the active exploit.
        exploit.green
        rl.setPrompt('Jsploit (' + exploit  + ') > ');
    })
    .on('searchExploit', function (exploit) {
        shell.log("Exploits found: ".yellow);
        shell.log("[+] linux/proxy/squid_ntlm_authenticate".blue);
        //shell.log("[+] /windows/ftp/turboftp_port");
    })
    .on('log', function (text, options) {
        console.log(text);
    })
    .on('clear', function () {
        console.log('\u001B[2J\u001B[0;0f');
    })
    .on('exit', function () {
        rl.close();
        process.exit();
    })
    .on('error', console.error.bind(console));
rl.on('line', function (userInput) {
    shell.execute(userInput, contexts[currentUser]);
	rl.prompt();
});

rl.prompt();
