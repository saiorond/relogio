const hoursHand = document.querySelector('.hand.hours');
const minutesHand = document.querySelector('.hand.minutes');
const secondsHand = document.querySelector('.hand.secondss');

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360);
}

const setClock = () => {
    const currentDate = new Date();

    const secondsPercentage = currentDate.getSeconds() / 60;
    const minutesPercentage = currentDate.getminutes() / 60;
    const hoursPercentage = currentDate.gethours() / 60;

    setRotation(secondsHand, secondsPercentage);
    setRotation(minutesHand, minutesPercentage);
    setRotation(hoursHand, hoursPercentage);

}

setClock();

setInterval(setClock, 1000);
