/**
 * 
 * 文中の「。」を「んご。」，たまに「んご。こいつはりんごろう。」に置換する関数
 */
function replaceNgo(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        // 。->んご。
        node.textContent = node.textContent.replace(/。/g,
            function () {
                if (Math.floor(Math.random() * 5) === 0) {
                    return "んご。こいつはりんごろう。";
                } else {
                    return "んご。";
                }
            }
        );

        // ．->んご．
        node.textContent = node.textContent.replace(/．/g,
            function () {
                if (Math.floor(Math.random() * 5) === 0) {
                    return "んご．こいつはりんごろう．";
                } else {
                    return "んご．";
                }
            }
        );

        // ？->んご？
        node.textContent = node.textContent.replace(/？/g,
            function () {
                if (Math.floor(Math.random() * 5) === 0) {
                    return "んご？こいつはりんごろう。";
                } else {
                    return "んご？";
                }
            }
        );

        // ！->んご！
        node.textContent = node.textContent.replace(/！/g,
            function () {
                if (Math.floor(Math.random() * 5) === 0) {
                    return "んご！こいつはりんごろう！";
                } else {
                    return "んご！";
                }
            }
        );
    } else {
        node.childNodes.forEach(replaceNgo);
    }
}

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
    replaceNgo(document.body);
}
