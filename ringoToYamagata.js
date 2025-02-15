/**
 * 
 * 「りんご」とかを「山形りんご」とかに置換する関数
 */
function ringoToYamagata(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(/りんご/g, "山形りんご");
        node.textContent = node.textContent.replace(/リンゴ/g, "山形リンゴ");
        node.textContent = node.textContent.replace(/林檎/g, "山形林檎");

        node.textContent = node.textContent.replace(/apple/g, "Yamagata apple");
        node.textContent = node.textContent.replace(/Apple/g, "Yamagata apple");
        node.textContent = node.textContent.replace(/APPLE/g, "YAMAGATA APPLE");
    } else {
        node.childNodes.forEach(ringoToYamagata);
    }
}

window.onload = function () {
    ringoToYamagata(document.body);
}
