window.onload = function () {
    var magnifier = document.getElementById("magnifier");//父盒子
    var small = magnifier.children[0];//小盒子
    var big = magnifier.children[1];//大盒子
    var mask = small.children[1];//鼠标跟踪盒子
    var bigImage = big.children[0];//大图片

    small.onmouseover = function () {
        big.style.display = "block";
        mask.style.display = "block";
    };

    small.onmouseout = function () {
        big.style.display = "none";
        mask.style.display = "none";
    };

    small.onmousemove = function (event) {
        var event = event || window.event;
        var x = event.clientX - this.offsetParent.offsetLeft - mask.offsetWidth / 2;
        var y = event.clientY - this.offsetParent.offsetTop - mask.offsetHeight / 2;

        if (x < 0)
            x = 0;
        else if (x > small.offsetWidth - mask.offsetWidth)
            x = small.offsetWidth - mask.offsetWidth;

        if (y < 0)
            y = 0;
        else if (y > small.offsetHeight - mask.offsetHeight)
            y = small.offsetHeight - mask.offsetHeight;

        mask.style.left = x + "px";
        mask.style.top = y + "px";

        bigImage.style.left = (-x * big.offsetWidth / small.offsetWidth) + "px";
        bigImage.style.top = (-y * big.offsetHeight / small.offsetHeight) + "px";
    };
};