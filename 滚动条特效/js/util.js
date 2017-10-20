function $id(id) {
    return document.getElementById(id);
}

function scroll() {
    if(window.pageYOffset != null){
        return{
            top :window.pageYOffset,
            left:window.pageXOffset
        }
    }

    if(window.document.compatMode == "CSS1Compat" ){
        return{
            top :document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }

    return{
        top :document.body.scrollTop,
        left:document.body.scrollLeft
    }
}

function show(obj) {
    obj.style.display = "block";
}

function hide(obj) {
    obj.style.display = "none";
}