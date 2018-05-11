## Nice looking irc client

The goals of this project are to build a cross platform, easy-to-use, gorgeous irc client.


### Development Guide

#### Starting a test irc server:

`docker run -p 6667:6667 -d carver/ngircd`


### Client side 
This is a react app, and rendered with electron.
We are using node-irc as a irc client library. You can find it's docs [here](https://node-irc.readthedocs.io/en/latest/API.html#client)