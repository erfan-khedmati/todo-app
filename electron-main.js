const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Hide menu bar
  mainWindow.setMenuBarVisibility(false)

  // mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
    mainWindow.loadURL("http://localhost:5000/")
});
