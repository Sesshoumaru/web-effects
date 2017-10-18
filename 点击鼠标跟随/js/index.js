window.onload = function () {
    var star = document.getElementById("star");
    var leaderX = 0,leaderY = 0;
    var targetX = 0,targetY = 0;

    setInterval(function () {
        leaderX = leaderX + (targetX - leaderX)/10;
        leaderY = leaderY + (targetY - leaderY)/10;

        star.style.left = leaderX + "px";
        star.style.top = leaderY + "px";
    },10);

    document.onclick = function (event) {
        var event = event || window.event;
        targetX = event.clientX -  star.offsetWidth/2;
        targetY = event.clientY-  star.offsetHeight/2
    }
}