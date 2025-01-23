const { contextBridge, ipcRenderer } = require('electron');
const path = require("path")
const fs = require("fs")

contextBridge.exposeInMainWorld("electronAPI", {
    min: () => ipcRenderer.send("minimizeWindow"),
    readFile: (relativePath) => {
        const absolutePath = path.join(__dirname, relativePath);
        return fs.readFileSync(absolutePath, 'utf-8');
    },
    writeTask: (relativePath, id, title = null, description = null, limit_time = null, star = null) => {
        // Getting path
        const absolutePath = path.join(__dirname, relativePath);

        // Read the file
        const data = fs.readFileSync(absolutePath, "utf-8")
        const jsonData = JSON.parse(data)

        // Find the task
        const task = jsonData.tasks.find(t => t.id === id)

        // remove the task from the list
        jsonData.tasks = jsonData.tasks.filter(t => t.id !== id);

        // Check to changes
        if (title !== null) {
            task.title = title
        }

        if (description !== null) {
            task.description = description
        }

        if (limit_time !== null) {
            task.limit_time = limit_time
        }

        if (star !== null) {
            task.star = star
        }

        // Add task to the all lists
        jsonData.tasks.push(task)

        // Write the file
        fs.writeFileSync(absolutePath,JSON.stringify(jsonData));
    }
})