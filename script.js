const container = document.querySelector(".container");

document.querySelector(".container > i").addEventListener('click', function () {
    container.style.scale = "0";
    setTimeout(() => {
        container.style.scale = "1";
    }, "3000");
});