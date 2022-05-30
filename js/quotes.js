$(document).ready(function () {
    const settings = {
        "cache": false,
        "dataType": "json",
        "async": true,
        "crossDomain": true,
        "url": "../quotes.json",
        "method": "GET"
    }
    $.ajax(settings).done(function (response) {
        var filterList = JSON.parse(JSON.stringify(response));
        //这是一开始要写的
        let a = Math.floor(Math.random() * (filterList.length));
        document.getElementById('thought').innerHTML = filterList[a].text;
        //每10秒要改的装置
        setInterval(function(){
        let a = Math.floor(Math.random() * (filterList.length));
        document.getElementById('thought').innerHTML = filterList[a].text;
    },10000);
    })
})