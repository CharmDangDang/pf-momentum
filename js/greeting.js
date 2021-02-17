const nameBox = document.querySelector(".js-name");

function showName(name) {
    nameBox.innerHTML = "";
    const title = document.createElement("span");
    const editBtn = document.createElement("button");
    title.className = "name__text";
    title.innerHTML = `오늘도 힘내요 ${name}님`;
    editBtn.innerHTML = "수정";
    editBtn.className = "edit__btn";
    editBtn.addEventListener("click", editSubmit);
    nameBox.appendChild(title);
    nameBox.appendChild(editBtn);
}

function editSubmit(event) {
    const title = document.querySelector(".name__text");
    const btn = document.querySelector(".edit__btn");
    event.preventDefault();
    localStorage.removeItem("username");
    title.remove();
    loadName();
    event.target.remove();

}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const value = input.value;
    localStorage.setItem("username", value);
    showName(value);
}

function nameInput() {

    const input = document.createElement("input");
    input.placeholder = "이름을 입력해주세요";
    input.type = "text";
    input.className = "name__input";
    const form = document.createElement("form");
    form.addEventListener("submit", handleSubmit);
    form.appendChild(input);
    nameBox.appendChild(form);
}

function loadName() {
    const name = localStorage.getItem("username");
    if (name === null) {
        nameInput();
    } else {
        showName(name);
    }
}

function init() {
    loadName();
}

init();