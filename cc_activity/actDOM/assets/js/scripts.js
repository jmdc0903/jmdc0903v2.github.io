
const divBody = document.getElementById("div-body");

const primaryBtn = document.querySelector(".btn-primary");
const infoBtn = document.querySelector(".btn-info");
const dangerBtn = document.querySelector(".btn-danger");
const successBtn = document.querySelector(".btn-success");
const secondaryBtn = document.querySelector(".btn-secondary");
const warningBtn = document.querySelector(".btn-warning");
const lightBtn = document.querySelector(".btn-light");
const darkBtn = document.querySelector(".btn-dark");


primaryBtn.addEventListener("click", function() {
    divBody.classList.remove("bg-info", "bg-danger", "bg-success", "bg-secondary", "bg-warning", "bg-light", "bg-dark");
    divBody.classList.add("bg-primary");
});

infoBtn.addEventListener("click", function() {
    divBody.classList.remove("bg-primary", "bg-danger", "bg-success", "bg-secondary", "bg-warning", "bg-light", "bg-dark");
    divBody.classList.add("bg-info");
});

dangerBtn.addEventListener("click", function() {
    divBody.classList.remove("bg-primary", "bg-info", "bg-success", "bg-secondary", "bg-warning", "bg-light", "bg-dark");
    divBody.classList.add("bg-danger");
});

successBtn.addEventListener("click", function() {
    divBody.classList.remove("bg-primary", "bg-info", "bg-danger", "bg-secondary", "bg-warning", "bg-light", "bg-dark");
    divBody.classList.add("bg-success");
});

secondaryBtn.addEventListener("click", function() {
    divBody.classList.remove("bg-primary", "bg-info", "bg-danger", "bg-success", "bg-warning", "bg-light", "bg-dark");
    divBody.classList.add("bg-secondary");
});

warningBtn.addEventListener("click", function() {
    divBody.classList.remove("bg-primary", "bg-info", "bg-danger", "bg-success", "bg-secondary", "bg-light", "bg-dark");
    divBody.classList.add("bg-warning");
});

lightBtn.addEventListener("click", function() {
    divBody.classList.remove("bg-primary", "bg-info", "bg-danger", "bg-success", "bg-secondary", "bg-warning", "bg-dark");
    divBody.classList.add("bg-light");
});

darkBtn.addEventListener("click", function() {
    divBody.classList.remove("bg-primary", "bg-info", "bg-danger", "bg-success", "bg-secondary", "bg-warning", "bg-light");
    divBody.classList.add("bg-dark");
});