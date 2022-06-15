function change() {
    document.getElementById('bgimg').style.backgroundImage = 'url(https://iw233.cn/api.php?sort=mp)';

    setInterval(function () {
        document.getElementById('bgimg').src =  document.getElementById('bgimg').src
    }, 10000);
}
change();
