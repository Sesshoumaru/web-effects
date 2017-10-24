window.onload = function () {
    //0. 取元素
    var slider = document.getElementById("slider");
    var slider_main = document.getElementById("slider_main");
    var slider_arrow = document.getElementById("slider_arrow");
    var lis = slider_main.children[0].children;
    var arrow_children = slider_arrow.children;

    //1 定义位置数据
    var json = [
        {   //  1
            width: 400, top: 20, left: 50, opacity: 20, z: 2
        },
        {  // 2
            width: 600, top: 70, left: 0, opacity: 80, z: 3
        },
        {   // 3
            width: 800, top: 100, left: 200, opacity: 100, z: 4
        },
        {  // 4
            width: 600, top: 70, left: 600, opacity: 80, z: 3
        },
        {   //5
            width: 400, top: 20, left: 750, opacity: 20, z: 2
        }
    ];

    //2. 显示隐藏箭头
    slider.onmouseover = function () {
        animate(slider_arrow, {opacity: 100});
    };
    slider.onmouseout = function () {
        animate(slider_arrow, {opacity: 0});
    };

    //3. 箭头绑定点击事件
    var over = true;
    for (var item in arrow_children) {
        arrow_children[item].onclick = function () {
            if (this.className === "prev") {
                if (over) {
                    change_location(false);
                    over = false;
                }
            } else {
                if (over) {
                    change_location(true);
                    over = false;
                }
            }
        };

    }

    //4. 改变位置方法

    function change_location(flag) {
        if (flag) {
            json.unshift(json.pop());
        } else {
            json.push(json.shift());
        }

        for (var k in json) {
            animate(lis[k], {
                width: json[k].width,
                top: json[k].top,
                left: json[k].left,
                opacity: json[k].opacity,
                zIndex: json[k].z
            }, function () {
                over = true;
            });
        }
    }

    //5. 页面加载成功先按配置加载位置
    change_location();
};