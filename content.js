/**
 * 
 * 文中の「。」を「んご。」，たまに「んご。こいつはりんごろう。」に置換する関数
 */
function replaceNgo(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        if (Math.floor(Math.random() * 5) === 0) {
            node.textContent = node.textContent.replace(/。/g, "んご。こいつはりんごろう。");
        } else {
            node.textContent = node.textContent.replace(/。/g, "んご。");
        }
    } else {
        node.childNodes.forEach(replaceNgo);
    }
}

window.onload = function () {
    replaceNgo(document.body)
}
