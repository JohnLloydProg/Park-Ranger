const history_images = ["./images/testimonials/2021.png", "./images/testimonials/2022.png", "./images/testimonials/2023.png", "./images/testimonials/2024.png"];
var i = 0;

function next() {
    var img = document.getElementById('history-img');
    var h2 = document.getElementById('year');
    i++;
    if (i == 4) {
        i = 0;
    }
    img.src = history_images[i];
    h2.textContent = "Year " + (2021 + i)
}

function back() {
    var img = document.getElementById('history-img');
    var h2 = document.getElementById('year');
    i--;
    if (i == -1){
        i = 3;
    }
    img.src = history_images[i];
    h2.textContent = "Year " + (2021 + i)
}