window.onload = function () {
    var top = $id("top");
    var nav = $id("nav");
    var main = $id("main");
    var ad = $id("ad");

    var timer1 = null;
    var timer2 = null;
    var leader1 = 0, target1 = 0;
    var adTop = 80;
    var leader2 = 0, target2 = 0;

    var navTop = nav.offsetTop;
    window.onscroll = function () {
        var scrollTop = scroll().top;
        leader1 = scrollTop;

        if (scrollTop >= navTop) {
            nav.className = "nav nav-fixed";
            show(ad);
            show(gotoTop);

            clearInterval(timer2);
            target2 = scrollTop + adTop;
            timer2 = setInterval(function () {
                leader2 = leader2 + (target2 - leader2) / 10;
                ad.style.top = leader2 + "px";
            }, 30);

        } else {
            nav.className = "nav";
            hide(ad);
            clearInterval(timer2);
            hide(gotoTop);
        }
    };


    gotoTop.onclick = function () {
        target1 = 0;
        timer1 = setInterval(function () {
            leader1 = leader1 - (leader1 - target1) / 10;
            window.scrollTo(0, leader1);

            if (leader1 == target1) {
                clearInterval(timer1);
            }
        }, 10);
    }
};