const body = document.querySelector("body");


function getNum() {
    let randNum = Math.floor(Math.random() * 3);
    return randNum;
}


function init() {
    body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(assets/images/${getNum()+1}.jpg)`;

}

init();