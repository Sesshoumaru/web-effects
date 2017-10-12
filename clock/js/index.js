
window.onload = function () {
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");

    setInterval(function () {
        var date = new Date();

        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms/1000;
        var m = date.getMinutes() + s/60;
        var h = date.getHours() + m/60;

        second.style.WebkitTransform = "rotate("+ s*6 +"deg)";
        second.style.mozTransform = "rotate("+ s*6 +"deg)";

        minute.style.WebkitTransform = "rotate("+ m*6 +"deg)";
        minute.style.mozTransform = "rotate("+ m*6 +"deg)";

        hour.style.WebkitTransform = "rotate("+ h*30 +"deg)";
        hour.style.mozTransform = "rotate("+ h*30 +"deg)";
    },200)
}