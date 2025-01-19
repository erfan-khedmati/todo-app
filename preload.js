const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld("electronAPI", {
    min: ()=> ipcRenderer.send("minimizeWindow")
})