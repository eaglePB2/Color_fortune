function change() {
    document.getElementById('bgimg').style.backgroundImage = 'url(https://pic.re/images)';

    setInterval(function () {
        document.getElementById('bgimg').src =  document.getElementById('bgimg').src
    }, 10000);
}
change();