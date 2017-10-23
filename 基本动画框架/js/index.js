function $(id) {
    return document.getElementById(id);
}

window.onload = function () {
    $("left200").onclick = function () {
      animate($("box"),{left:200});
    };

    $("left400").onclick = function () {
        animate($("box"),{left:400});
    };

    $("top200").onclick = function () {
        animate($("box"),{top:200});
    };

    $("top400").onclick = function () {
        animate($("box"),{top:400});
    };

    $("width200").onclick = function () {
        animate($("box"),{width:200});
    };

    $("height200").onclick = function () {
        animate($("box"),{height:200});
    };

    $("zindex4").onclick = function () {
        animate($("box"),{zIndex:4});
    };

    $("opacity40").onclick = function () {
        animate($("box"),{opacity:40});
    };

    $("borderRadius50").onclick = function () {
        animate($("box"),{borderRadius:50});
    };
    $("all").onclick = function () {
        animate($("box"),{left:400,top:400,width:200,height:200,zIndex:4,opacity:40,borderRadius:50});
    };
};