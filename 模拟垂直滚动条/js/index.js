window.onload = function () {
    var box = document.getElementById("box");
    var content = box.children[0];
    var scroll = box.children[1];
    var bar = scroll.children[0];

    var height = scroll.offsetHeight * scroll.offsetHeight / content.offsetHeight;
    if(height> scroll.offsetHeight)
        height = 0;
    bar.style.height = height + "px";

    bar.onmousedown = function (event) {
        var event = event || window.event;
        var y =  event.clientY - bar.offsetTop;

        document.onmousemove = function (event) {
            var event = event || window.event;
            var movey = event.clientY - y;
            if(movey < 0)
                movey = 0;
            else  if(movey > scroll.offsetHeight - bar.offsetHeight)
                movey = scroll.offsetHeight - bar.offsetHeight;

            bar.style.top = movey+ "px";
            content.style.top = 0 - movey*(content.offsetHeight - box.offsetHeight)/(scroll.offsetHeight-bar.offsetHeight) + "px";
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        };

        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }
};