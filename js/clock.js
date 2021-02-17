const nowClock = document.querySelector(".clockTitle"),
    clockTitle = nowClock.querySelector(".clock__text");



function clock() {
    let nowDate = new Date();
    let nowDay = nowDate.getDay();
    let nowHours = nowDate.getHours();
    let nowMinutes = nowDate.getMinutes();
    let nowSeconds = nowDate.getSeconds();
    clockTitle.innerText = `${addZero(nowHours)}:${addZero(nowMinutes)}:${addZero(nowSeconds)}`
}

function addZero(params) {
    if (params < 10) {
        return `0${params}`
    } else {
        return `${params}`
    }
}

clock();
setInterval(() => {
    clock()
}, 1000);