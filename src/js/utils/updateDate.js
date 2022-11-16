/**
 * function to update the date in the footer and the date in the header of the page
 */
function setDate() {
    let date = new Date()
    let year = date.getFullYear()
    let age = year - 2003
    let updatage = document.querySelectorAll(".age")

    updatage.forEach((object) => {
        object.innerHTML = age + " ans"
    })

    // automaticly update the date of the footer
    let dateFooter = document.querySelectorAll(".years")
    dateFooter.forEach((object) => {
        object.innerHTML = year
    })
}

export { setDate }