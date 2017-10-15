window.onload = function () {
    var sequence = document.getElementById("sequence");
    var images = document.getElementById("images");
    var sequenceLis = sequence.children[0].children;
    var timer = null;
    var leader = 0,tagert = 0;
    for(var i = 0,lenght = sequenceLis.length;i<lenght;i++){
        var li = sequenceLis[i];
        li.index = i;
        li.onmouseover = function () {
            clearInterval(timer);
            tagert = -490*this.index;
            for(var j = 0,lenght = sequenceLis.length;j<lenght;j++){
                sequenceLis[j].className = sequenceLis[j].index !== this.index ? "" : "current";
            }

            timer = setInterval(function () {
                leader = leader + (tagert-leader)/10;
                images.style.left = leader+"px";
            },30)
        }
    }
}