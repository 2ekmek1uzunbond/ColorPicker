//
//
// Details: https://www.kirupa.com/html5/generating_random_colors.htm
// -------
// Feel free to use this code as you see fit for any type of content. If you have
// questions, post on: https://forum.kirupa.com
//
// Source: https://github.com/kirupa/kirupa/blob/master/js/randomColor.js
//
//
function getRandomColor(h = [0, 360], s = [50, 100], l = [50, 90], a = [1, 1]) {
    let hue = getRandomNumber(h[0], h[1]);
    let saturation = getRandomNumber(s[0], s[1]);
    let lightness = getRandomNumber(l[0], l[1]);
    let alpha = getRandomNumber(a[0] * 100, a[1] * 100) / 100;

    return {
        h: hue,
        s: saturation,
        l: lightness,
        a: alpha,
        value: getHSLAColor(hue, saturation, lightness, alpha)
    }
}

function getRandomNumber(low, high) {
    let r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
}

function getHSLAColor(h, s, l, a) {
    return `hsl(${h}, ${s}%, ${l}%, ${a})`;
}

function getSimpleRandomColor() {
    let characters = "0123456789ABCDEF";
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += characters[getRandomNumber(0, 15)];
    }

    return color;
}