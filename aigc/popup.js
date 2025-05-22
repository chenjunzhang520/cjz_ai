document.addEventListener('DOMContentLoaded', function() {
    const changeColorButton = document.getElementById('changeColorButton');
    changeColorButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                func: function() {  // 修改了参数名从 'function' 改为 'func'
                    document.body.style.backgroundColor = 'green';
                }
            });
        });
    });
});