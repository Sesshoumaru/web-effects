window.onload = function () {
    function $id(id) {
        return document.getElementById(id);
    }

    //0. 获取操作的元素
    var indexNow = 0;
    var js_slider = $id("js_slider");
    var slider_main = js_slider.children[0].children[0];
    var slider_ctrl = js_slider.children[1];
    var slider_main_imgs = slider_main.children;
    var slider_ctrl_spans = slider_ctrl.children;
    var slider_width = js_slider.clientWidth;

    //1. 根据图片张数动态生成span
    for (var i = 0, length = slider_main_imgs.length; i < length; i++) {
        var span = document.createElement("span");
        span.innerHTML = length - i;
        span.setAttribute("class", "slider-ctrl-con");
        slider_ctrl.insertBefore(span, slider_ctrl.children[1]);
    }
    slider_ctrl.children[1].className = "slider-ctrl-con current";

    for (var i = 1, length = slider_main_imgs.length; i < length; i++) {
        slider_main_imgs[i].style.left = slider_width + "px";
    }

    //2. 循环span，为每个span绑定单击事件
    for (var i = 0, length = slider_ctrl_spans.length; i < length; i++) {
        slider_ctrl_spans[i].onclick = function () {
            if (this.className === "slider-ctrl-prev") {
                leftPlay();
            } else if (this.className === "slider-ctrl-next") {
                rightPlay();
            } else {
                clickPlay(this);
            }
        }
    }

    //3. 设置定时器，定时滚动
    var timer = null;
    timer = setInterval(rightPlay, 2000);

    //4. 鼠标进入停止定时器，鼠标移开开启定时器
    js_slider.onmouseover = function () {
        clearInterval(timer);
    };
    js_slider.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(rightPlay, 2000);
    };

    //5. 方法列表

    //设置当前选中的项
    function setCurrentCon() {
        for (var i = 1, length = slider_ctrl_spans.length-1; i < length; i++) {
            slider_ctrl_spans[i].className = "slider-ctrl-con";
        }

        slider_ctrl_spans[indexNow+1].className = "slider-ctrl-con current";
    }

    //左侧播放
    function leftPlay() {
        //1. 当前图片向右动画滑动到310px位置
        animate(slider_main_imgs[indexNow], {left: slider_width});
        //2. 计算上一张图片的索引
        --indexNow < 0 ? indexNow = slider_main_imgs.length - 1 : indexNow;
        //3. 上一张图片快速切换到左侧-310px位置
        slider_main_imgs[indexNow].style.left = -slider_width + "px";
        //4. 上一张图片向右动画滑动到0px位置
        animate(slider_main_imgs[indexNow], {left: 0});
        setCurrentCon();
    }

    //右侧播放
    function rightPlay() {
        //1. 当前图片向左动画滑动到-310px位置
        animate(slider_main_imgs[indexNow], {left: -slider_width});
        //2. 计算下一张图片的索引
        ++indexNow > slider_main_imgs.length - 1 ? indexNow = 0 : indexNow;
        //3. 下一张图片快速切换到右侧310px位置
        slider_main_imgs[indexNow].style.left = slider_width + "px";
        //4. 下一张图片向左动画滑动到0px位置
        animate(slider_main_imgs[indexNow], {left: 0});
        setCurrentCon();
    }

    //点击播放
    function clickPlay(obj) {
        var that = obj.innerHTML - 1;
        if (that > indexNow) {//等同右滑按钮
            //1. 当前图片向左动画滑动到-310px位置
            animate(slider_main_imgs[indexNow], {left: -slider_width});
            //2. 选择图片快速切换到右侧310px位置
            slider_main_imgs[that].style.left = slider_width + "px";
        }
        else if (that < indexNow) {//等同左滑按钮
            //1. 当前图片向右动画滑动到310px位置
            animate(slider_main_imgs[indexNow], {left: slider_width});
            //2. 选择图片快速切换到左侧-310px位置
            slider_main_imgs[that].style.left = -slider_width + "px";

        }

        //选择图片动画滑动到0px位置
        indexNow = that;
        animate(slider_main_imgs[indexNow], {left: 0});
        setCurrentCon();
    }
};