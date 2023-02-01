function change() {
    document.getElementById('bgimg').style.backgroundImage = 'url(https://pic.re/image)';

    setInterval(function () {
        document.getElementById('bgimg').src =  document.getElementById('bgimg').src
    }, 10000);
}
change();
