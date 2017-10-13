function $id(id) {
    return document.getElementById(id);
}

window.onload = function () {
    var timer = null;

    var image = document.getElementById("image");
    var top_value = 0;

    $id("up").onmouseover = function () {
        clearTimer();

        timer = setInterval(function () {
            top_value -= 3;
            if(top_value > -1470+380){
                image.style.top = top_value+"px";
            }else{
                clearTimer();
            }
        },30)
    }

    $id("down").onmouseover = function () {
        clearTimer();

        timer = setInterval(function () {
            top_value += 1;
            if(top_value < 0){
                image.style.top = top_value+"px";
            }else{
                clearTimer();
            }
        },30)
    }

    $id("phone").onmouseout = function () {
        clearTimer();
    }

    function clearTimer() {
        if(timer != null)
            clearInterval(timer);
    }
}