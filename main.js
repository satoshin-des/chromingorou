/**
 * 
 * 文中の「。」を「んご。」，たまに「んご。こいつはりんごろう。」に置換する関数
 */
function replaceNgo(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        // 。->んご。
        node.textContent = myReplace(node, "。");

        // ．->んご．
        node.textContent = myReplace(node, "．");

        // ？->んご？
        node.textContent = myReplace(node, "？");

        // ！->んご！
        node.textContent = myReplace(node, "！");
    } else {
        node.childNodes.forEach(replaceNgo);
    }
}

function myReplace(node, str) {
    return node.textContent.replace(new RegExp(str, "g"),
        function () {
            if (Math.floor(Math.random() * 5) === 0) {
                return "んご" + str + "こいつはりんごろう" + str;
            } else {
                return "んご" + str;
            }
        }
    );
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

ringoToYamagata(document.body);
replaceNgo(document.body);

const obs = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            ringoToYamagata(node);
            replaceNgo(node);
        }
    }
});

obs.observe(document.body, {
    childList: true,
    subtree: true
});
