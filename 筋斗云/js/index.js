window.onload = function () {
    var nav = document.getElementById("nav");
    var cloud = nav.children[0];
    var lis = nav.children[1].children;
    var current = 0;//当前停留位置
    var leader = 0,target = 0 ;//滑动动画起始位置、滑动动画结束位置

    for(var i = 0,length = lis.length;i<length;i++){
        lis[i].onmouseover = function () {
            target = this.offsetLeft;
        };

        lis[i].onclick = function () {
            current = this.offsetLeft;
        };

        lis[i].onmouseout = function () {
            target = current;
        };
    }

    setInterval(function () {
        leader = leader + (target - leader)/10;
        cloud.style.left = leader + "px";
    },10)
}