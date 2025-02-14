function replaceNgo(node) {
    n = Math.floor(Math.random() * 5)
    if (node.nodeType === Node.TEXT_NODE) {
        if (n % 5 === 0) {
            node.textContent = node.textContent.replace(/。/g, "んご。こいつはりんごろう。");
            // node.textContent = node.textContent.replace(/\./g, " Ngo. This is Ringorou.");
        } else {
            node.textContent = node.textContent.replace(/。/g, "んご。");
            // node.textContent = node.textContent.replace(/\./g, " Ngo.");
        }
    } else {
        node.childNodes.forEach(replaceNgo);
    }
}

window.onload = function () {
    replaceNgo(document.body)
}
