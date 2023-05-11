const secondHand = document.querySelector('#seconds')
const minuteHand = document.querySelector('#minutes') 
const hourHand = document.querySelector('#hours')

const clock = () => {
    const date = new Date()
    const second = date.getSeconds()
    const minute = date.getMinutes() + (second/60)
    const hour = (date.getHours() % 12) + (minute/60)

    const angleForSecond = second * 6
    const angleForMinute = minute * 6
    const angleForHour = hour * 30

    secondHand.setAttribute('transform', `rotate(${angleForSecond},244,251)`)
    minuteHand.setAttribute('transform', `rotate(${angleForMinute},244,251)`)
    hourHand.setAttribute('transform', `rotate(${angleForHour},244,251)`)
}

setInterval(clock,1000)
