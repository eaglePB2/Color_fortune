const hostUrl = window.location.href.split("#")[0];

// Note : Render the string to URL.
function renderString(s) {
    location.replace(hostUrl + "#" + s);
}

// Note : Do the text mask marquee animation.
let animationText = "我是一个会动的招牌菜";
let animationIndex = 0;

function getAnimationString() {
    let resultText = animationText.substring(0, animationIndex) + "*" + animationText.substring(animationIndex + 1);
    animationIndex = (animationIndex > animationText.length - 2) ? 0 : animationIndex + 1;
    return resultText;
}