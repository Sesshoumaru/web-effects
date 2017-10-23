function animate(obj, options, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in options) {
            var target = options[attr];
            if (attr === "zIndex") {
                obj.style.zIndex = target;
            }
            else {
                var attrValue = getStyleInt(obj, attr);

                var currentValue = parseInt(attrValue);
                var speed = (target - currentValue) / 10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                if (attr === "opacity") {
                    if (attr in obj.style) {
                        obj.style.opacity = (currentValue + speed ) / 100;
                    } else {
                            //console.log(currentValue);
                            //console.log(speed);
                        obj.style.filter = "alpha(opacity=" + (currentValue + speed)  + ")";
                    }
                }
                else {
                    obj.style[attr] = currentValue + speed + "px";
                }
            }


            if (flag && getStyleInt(obj, attr) != target) {
                flag = false;
            }
        }

        if (flag) {
            clearInterval(obj.timer);
        }
    }, 30);
}

function getStyleInt(obj, attr) {
    if (attr === "opacity")
    {
        console.log(getStyle(obj, attr))
        return Math.round(parseInt(getStyle(obj, attr) * 100)) || 0;
    }
    return parseInt(getStyle(obj, attr)) || 0;
}

function getStyle(obj, attr) {
    if (obj.currentStyle)
        return obj.currentStyle[attr];
    return window.getComputedStyle(obj, null)[attr];
}