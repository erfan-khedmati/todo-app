const { app, BrowserWindow, screen, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {

  // Get the primary display size
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      enableRemoteModule: false,
    },

    frame: false // hide frame
  });

  mainWindow.webContents.openDevTools()

  // Hide menu bar
  mainWindow.setMenuBarVisibility(false)

  // mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
  mainWindow.loadURL("http://localhost:5000/")
  
  ipcMain.on("minimizeWindow", () => {
    mainWindow.minimize();
  })
});
