// content_script.js
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "x") {
        // 保存された設定を読み込む
        chrome.storage.sync.get(
            ["dahai", "shiteki", "tempai", "kiken", "syukyoku", "juni"],
            function (result) {
                name_to_id = {
                    dahai: "A",
                    shiteki: "B",
                    tempai: "C",
                    kiken: "D",
                    syukyoku: "E",
                    juni: "F",
                };

                for (key in result) {
                    if (result[key]) {
                        document.getElementById(name_to_id[key]).click();
                    }
                }
            }
        );
    }
});
