const day = document.getElementById("day")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")

const launch = "17 oct 2023"

function countDown() {
    const launchDate = new Date(launch)
    const today = new Date

    const totalSeconds = (launchDate - today) / 1000;


    const finalDays = Math.floor(totalSeconds / 60 / 60 / 24)
    const finalHours = Math.floor(totalSeconds / 60 / 60) % 24
    const finalMinutes = Math.floor(totalSeconds / 60) % 60
    const finalSeconds = Math.floor(totalSeconds) % 60

    day.innerHTML = `${formatTime(finalDays)}D`
    hour.innerHTML = `${formatTime(finalHours)}H`
    minute.innerHTML = `${formatTime(finalMinutes)}M`
    second.innerHTML = `${formatTime(finalSeconds)}S`
}

function formatTime(time) {
    return time < 10? `0${time}`:time
}

countDown()
setInterval(countDown, 1000)