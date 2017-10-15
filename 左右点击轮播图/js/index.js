window.onload = function () {
    var silder = document.getElementById("silder");
    var arrow = document.getElementById("arrow");
    silder.onmouseover = function () {
        arrow.style.display = "block";
    };
    silder.onmouseout = function () {
        arrow.style.display = "none";
    };

    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var images = document.getElementById("images");

    var leader = 0, target = 0;
    left.onclick = function () {
        target += 520;
    }
    right.onclick = function () {
        target -= 520;
    }
    setInterval(function () {
        if (target > 0) {
            target = 0;

        }
        else if (target < -2080) {
            target = -2080;
        }

        leader = leader + (target - leader) / 10;
        images.style.left = leader + "px";
    }, 30)
}