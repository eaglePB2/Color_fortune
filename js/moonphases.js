function moon_phase() {
    var round = ['\🌑', '\🌒', '\🌓', '\🌔', '\🌕', '\🌖', '\🌗', '\🌘'],
        i = 0,
        len = round.length;
    setInterval(function () {
        history.replaceState({}, '', '#' + round[i % len]);
        i++;
    }, 120);
}
moon_phase();