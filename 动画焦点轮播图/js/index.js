function $id(id) {
    return document.getElementById(id);
}

function animate(obj,target) {
    clearInterval(obj.timer);

    var speed = obj.offsetLeft > target ? -15:15;
    obj.timer = setInterval(function () {
        var result = target - obj.offsetLeft  ;
        obj.style.left = obj.offsetLeft + speed + "px";
        if(Math.abs(result)< 15){
            clearInterval(obj.timer);
            obj.style.left = target + "px";
        }
    },10);
}

window.onload = function () {
    //0. 获取需要操作的元素
    var all = $id("all");
    var ul = $id("ul");
    var ol = $id("ol");
    var ulLis = ul.children;

    //1. 动态创建ol里面的li元素和克隆第1张图片并插入ul的最后
    for (var i = 0,length = ulLis.length;i<length;i++){
        var li = document.createElement("li");
        li.index = i;
        li.innerHTML = i + 1;
        ol.append(li);
    }
    ol.children[0].className = "current";

    var image1 = ulLis[0].cloneNode(true);
    ul.append(image1);

    //2. 为ol里面的li元素添加鼠标经过的图片滚动的动画
    var olLis = ol.children;
    for (var i = 0,length = olLis.length;i<length;i++){
       olLis[i].index = i;
       olLis[i].onmouseover = function () {
           animate(ul,-this.index*500)
           for(var j = 0;j < olLis.length;j++){
               olLis[j].className =  "";
           }
          this.className = "current" ;

           ulIndex = olIndex = this.index;
       }
    }

    //3. 为轮播图添加自动循环滚动动画的定时器
    var timer = null;
    var ulIndex = 0;
    var olIndex = 0;
    timer = setInterval(autoPlay,1000);

    function autoPlay() {
        //一 ul图片滚动

        //1. 加1
        ulIndex++;

        //2. 判断
        if(ulIndex > ulLis.length - 1){
            ul.style.left = 0;
            ulIndex = 1;
        }

        //3. 执行
        animate(ul,- ulIndex*500);

        //**********************************//
        //二 ol当前位置滚动

        //1. 加1
        olIndex++;

        //2. 判断
        if(olIndex > olLis.length - 1){
            olIndex = 0;
        }

        //3. 执行
        for(var j = 0;j < olLis.length;j++){
            olLis[j].className =  "";
        }
        olLis[olIndex].className = "current" ;
    }

    //4. 为盒子增加鼠标进入停止滚动、鼠标移开开启滚动的功能
    all.onmouseover = function () {
        clearInterval(timer);
    }

    all.onmouseout = function () {
        timer = setInterval(autoPlay,1000);
    }
};