export function getDate(date) {
    date = date.split("T")
    date = date[0].split("-")

    let finalDate = ""
    for (let i = 0; i < date.length; i++) {
        if (i == date.length - 1) {
            finalDate += `${date[i]}`
        } else {
            finalDate += `${date[i]}/`
        }
    }

    return finalDate;

}

export function checkPassedDate(date) {
    const currentDate = new Date()

    date = date.split("T")[0]
    date = new Date(date)

    let is_passed = date < currentDate 

    return is_passed
}