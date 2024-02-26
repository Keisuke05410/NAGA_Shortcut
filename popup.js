document.addEventListener("DOMContentLoaded", function () {
    const checkboxIds = [
        "dahai",
        "shiteki",
        "tempai",
        "kiken",
        "syukyoku",
        "juni",
    ];

    // 保存された設定を読み込んでチェックボックスに反映させる
    chrome.storage.sync.get(checkboxIds, function (result) {
        checkboxIds.forEach((id) => {
            if (result[id] !== undefined) {
                document.getElementById(id).checked = result[id];
            }
        });
    });

    var saveButton = document.getElementById("save");
    saveButton.addEventListener("click", function () {
        // チェックボックスの状態を取得
        let settings = {};
        checkboxIds.forEach((id) => {
            settings[id] = document.getElementById(id).checked;
        });

        // 設定をchrome.storageに保存
        chrome.storage.sync.set(settings, function () {
            // 保存が完了したらメッセージを表示
            var saveMessage = document.getElementById("saveMessage");
            saveMessage.style.display = "block";
            // 数秒後にメッセージを非表示にする
            setTimeout(function () {
                saveMessage.style.display = "none";
            }, 3000);
        });
    });
});
