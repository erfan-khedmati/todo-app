export function updateTask(id, title = null, description = null, limit_time = null, star = null) {
    // Get the information from data and check what is changed
    const allTaskData = window.electronAPI.readFile("./src/data/data.json");
    const jsonData = JSON.parse(allTaskData)

    const task = jsonData.tasks.find(t => t.id === id)
    const is_title_changed = task.title !== title ? title : null;
    const is_description_changed = task.description !== description ? description : null;
    const is_limit_time_changed = task.limit_time !== limit_time ? limit_time : null;
    const is_star_changed = task.star !== star ? star : null;

    // Write the file
    window.electronAPI.writeTask("./src/data/data.json", id, is_title_changed, is_description_changed, is_limit_time_changed, is_star_changed)
}