const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 1200, height: 600})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  win.webContents.openDevTools();
}
  
app.on('ready', createWindow)