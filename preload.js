const { contextBridge, ipcRenderer } = require('electron');
const path = require("path")
const fs = require("fs")

contextBridge.exposeInMainWorld("electronAPI", {
    min: () => ipcRenderer.send("minimizeWindow"),
    readFile: (relativePath) => {
        const absolutePath = path.join(__dirname, relativePath);
        return fs.readFileSync(absolutePath, 'utf-8');
    },
})