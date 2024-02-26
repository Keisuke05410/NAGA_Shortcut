chrome.runtime.onInstalled.addListener(function (details) {
    // 拡張機能がインストールされたり、バージョンアップされたりしたときに実行
    if (details.reason === "install" || details.reason === "update") {
        // 初期設定値
        const defaultSettings = {
            dahai: true,
            shiteki: false,
            tempai: false,
            kiken: false,
            syukyoku: false,
            juni: false,
        };

        // 現在の設定を確認し、設定されていない場合にのみ初期値を設定
        chrome.storage.sync.get(
            Object.keys(defaultSettings),
            function (result) {
                let settingsToSet = {};
                for (let key in defaultSettings) {
                    if (result[key] === undefined) {
                        settingsToSet[key] = defaultSettings[key];
                    }
                }
                chrome.storage.sync.set(settingsToSet);
            }
        );
    }
});
