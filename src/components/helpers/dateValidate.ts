export const dateValidate = (date: Date): string => {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()

    return `${year} ${month} ${day}`
}