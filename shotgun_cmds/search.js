exports.description = "search exploit";

// Don't worry too much about this yet. You'll learn more about custom command modules later.
exports.options = {
    exploit: {
        noName: true,
        required: true,
        description: "The name of the exploit."
    }
}

exports.invoke = function (shell, options) {
    shell.emit('searchExploit', options.exploit);
};
