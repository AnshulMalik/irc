const irc = require("irc");

const client = new irc.Client('localhost', 'anshul', {
  channels: ["#channel"],
  port: 6677
});
