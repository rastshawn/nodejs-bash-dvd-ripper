var PORT = 3503;
var botID = "";

var express = require('express');
var app = express();
var fs = require('fs');
var spawn = require('child_process').spawn;
var request = require('request');

var i = 0;

app.post('/groupme', function(req, res) {
    var string = "";
    req.on('data', function(data) {
        string += data;
    });

    req.on('end', function(){
        var message = JSON.parse(string);
        var args = message.text.toLowerCase().split(" ");
        
        if (args[0] == "startcopy") {
            if (args[1] && args[2]) {
                startRip(args[1], args[2]);
            }
        }
        console.log(message.name);

    });

});

function postToGroup(text) {
    request({
        url: 'https://api.groupme.com/v3/bots/post',
        method: "POST",
        json: true,
        body : {
            "bot_id" : botID,
            "text" : text 
        }
    },
      function(error, response, body) {
        console.log(body);
        console.log(error);
      }
        );
}
app.listen(PORT, function() {
    console.log('listening on ' + PORT);
});




function startRip(name, season){
    const test = spawn('launch.sh', [name, season]);
    test.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    postToGroup("Your rip of " + name + " has started.");
}
