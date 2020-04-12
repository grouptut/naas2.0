include("scripts/pre.js");
include("scripts/headerImg.js");
include("scripts/nav.js");

function include(url) {
    let script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

