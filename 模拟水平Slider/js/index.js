window.onload = function () {
    var scroll = document.getElementById("scroll");
    var bar = scroll.children[0];
    var mask = scroll.children[1];
    var message = scroll.nextElementSibling || scroll.nextSibling;

    bar.onmousedown = function (event) {
        var event = event || window.event;
        var leftVal = event.clientX - this.offsetLeft;

        document.onmousemove = function (event) {
            var event = event || window.event;
            var x = event.clientX - leftVal;
            if(x<0)
                x=0;
            else if(x> scroll.offsetWidth)
                x= scroll.offsetWidth;


            bar.style.left =  x+ "px";
            mask.style.width =  bar.style.left;
            message.innerHTML = "百分比："+  parseInt(x* 100 /scroll.offsetWidth)+ "%";

            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        }
    };
    bar.onmouseup = function () {
        document.onmousemove = null;
    }
};