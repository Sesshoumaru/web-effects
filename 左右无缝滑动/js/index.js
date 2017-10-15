window.onload = function () {
    var images = document.getElementById("images");
    var timer = null;
    var num = 0;

    function animate() {
        num -= 3;
        if (num <= -1200)
            num = 0;
        images.style.left = num + "px";
    }

    var box = document.getElementById("box");
    timer = setInterval(animate, 30);
}