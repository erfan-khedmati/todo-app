export default class SingleTaskModel {
    constructor(id, title, description, star, addedDate, limit_time) {
        this.id = id;
        this.title = title
        this.description = description;
        this.star = star;
        this.addedDate = addedDate;
        this.limit_time = limit_time;
    }

    static createFormData(data, taskID) {
        const task = data.find(t => t.id.toString() === taskID);

        return new SingleTaskModel(
            task.id,
            task.title,
            task.description,
            task.star,
            task.added_date,
            task.limit_time
        )
    }

    updateData(title, description, limit_time, star) {
        const isTitleChanged = this.title !== title ? title : null
        const isDeScriptionChanged = this.description !== description ? description : null
        const isLimitDateChanged = this.limit_time !== limit_time ? limit_time : null
        const isStarChanged = this.star !== star ? star : null
        
        window.electronAPI.writeTask("./src/data/data.json", this.id,isTitleChanged, isDeScriptionChanged, isLimitDateChanged, isStarChanged)
    }
}