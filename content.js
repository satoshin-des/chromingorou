/**
 * 
 * 文中の「。」を「んご。」，たまに「んご。こいつはりんごろう。」に置換する関数
 */
function replaceNgo(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(/。/g, 
            function () {
                if (Math.floor(Math.random() * 5) === 0) {
                    return "んご。こいつはりんごろう。";
                } else {
                    return "んご。";
                }
            }
        );
    } else {
        node.childNodes.forEach(replaceNgo);
    }
}

window.onload = function () {
    replaceNgo(document.body)
}
