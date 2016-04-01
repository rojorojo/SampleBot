var restify = require('restify');
var builder = require('botbuilder');

//Create bot and add dialogs
var bot = new builder.BotConnectorBot({appID: 'rojosamplebot', appSecret: '499a6ae085b84c31b6fbc114429a8ee9'});
bot.add('/', function (session) {
    session.send('Hello World');
});

//Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});