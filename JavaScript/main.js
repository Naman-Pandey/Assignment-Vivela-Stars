var modal = document.getElementById("myModal");

var btn1 = document.getElementById("myBtn1");
btn1.onclick = function () {
    modal.style.display = "block";
}

var btn2 = document.getElementById("myBtn2");
btn2.onclick = function () {
    modal.style.display = "block";
}

var btn3 = document.getElementById("myBtn3");
btn3.onclick = function () {
    modal.style.display = "block";
}

var btn4 = document.getElementById("myBtn4");
btn4.onclick = function () {
    modal.style.display = "block";
}

var btn5 = document.getElementById("myBtn5");
btn5.onclick = function () {
    modal.style.display = "block";
}

var btn6 = document.getElementById("myBtn6");
btn6.onclick = function () {
    modal.style.display = "block";
}

var btn7 = document.getElementById("myBtn7");
btn7.onclick = function () {
    modal.style.display = "block";
}

var btn8 = document.getElementById("myBtn8");
btn8.onclick = function () {
    modal.style.display = "block";
}

var btn9 = document.getElementById("myBtn9");
btn9.onclick = function () {
    modal.style.display = "block";
}

var btn10 = document.getElementById("myBtn10");
btn10.onclick = function () {
    modal.style.display = "block";
}

var btn11 = document.getElementById("myBtn11");
btn11.onclick = function () {
    modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var slideIndex = 1;
function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    var dots = document.getElementsByClassName("slide-dot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slide-dot-active", "");
    }
    dots[slideIndex - 1].className += " slide-dot-active";
}
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}
function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
window.onload = showSlides;
