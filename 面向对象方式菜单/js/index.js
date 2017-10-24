window.onload = function () {
    function Menu(id) {
        this.menu = document.getElementById(id);
        this.level1_lis = this.menu.children[0].children;

    }

    Menu.prototype.init = function () {
        var that = this;
        for(var i = 0,length = this.level1_lis.length;i<length;i++){
            this.level1_lis[i].onmouseover = function () {
                that.show(this);
            };
            this.level1_lis[i].onmouseout = function () {
                that.hide(this);
            };
        }
    };

    Menu.prototype.show = function(obj){
        obj.children[0].style.display = "block";
    }

    Menu.prototype.hide = function (obj) {
        obj.children[0].style.display = "none";
    }

    var menu =  new Menu("menu");
    menu.init();
};