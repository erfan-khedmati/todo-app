const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {

  // Get the primary display size
  const {width, height} = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: true,
    },

    frame: false // hide frame
  });

  // Hide menu bar
  mainWindow.setMenuBarVisibility(false)

  // mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
    mainWindow.loadURL("http://localhost:5000/")
});
