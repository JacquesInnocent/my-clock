setInterval(setClock, 1000)

const hourStick = document.querySelector(['data-hour-stick'])
const minuteStick = document.querySelector(['data-minute-stick'])
const secondStick = document.querySelector(['data-second-hand'])

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondStick, secondsRatio)
    setRotation(minuteStick, minutesRatio)
    setRotation(hourStick, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()