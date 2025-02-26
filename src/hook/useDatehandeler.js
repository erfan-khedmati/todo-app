export function getDate(date) {
    // Make Date To String
    date = String(date)
    // Make Date to Date OBJ
    const objectDate = new Date(date);
    console.log(objectDate.getDate());
    // convert to yymmdd
    let finalDate = `${objectDate.getFullYear()}/${objectDate.getMonth() + 1 < 10 ? `0${objectDate.getMonth() + 1}` : objectDate.getMonth() + 1}/${objectDate.getDate() + 1 < 10 ? `0${objectDate.getDate()}` : objectDate.getDate()}`;
    return finalDate;

}

export function checkPassedDate(date) {
    const currentDate = new Date()

    date = String(date)
    date = date.split("T")[0]
    date = new Date(date)

    let is_passed = date < currentDate

    return is_passed
}