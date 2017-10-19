function $id(id) {
    return document.getElementById(id);
}

window.onload = function () {
    var btn = $id("btn");
    var regisiterBox = $id("regisiter");
    var header = regisiterBox.children[0];
    var close = $id("close");

    btn.onclick = function () {
        regisiterBox.style.display = "block";
    };

    close.onclick = function () {
        regisiterBox.style.display = "none";
    };

    header.onmousedown = function (event) {

        var event = event || window.event;
        var x = event.clientX - regisiterBox.offsetLeft - 205;
        var y = event.clientY - regisiterBox.offsetTop - 155;

        document.onmousemove = function (event) {
            var event = event || window.event;

            regisiterBox.style.left =  (event.clientX- x) + "px";
            regisiterBox.style.top =  (event.clientY -y) + "px";

            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        }
    };

    document.onmouseup = function () {
        document.onmousemove = null;
    };
};