function change() {
    document.getElementById('bgimg').style.backgroundImage = 'url(https://pic.re/image)';

    setInterval(function () {
        document.getElementById('bgimg').style.backgroundImage = 'url(https://pic.re/image)'
    }, 10000);
}
change();
