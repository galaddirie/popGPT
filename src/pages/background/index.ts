chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: '1',
        title: 'Summarize Selection',
        contexts: ['selection', 'editable'],

    });

    chrome.contextMenus.create({
        id: '2',
        title: 'Summarize Page',
        contexts: ['page', 'link', 'frame'],

    });

});
// context menu to send message to content script
chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log('context menu clicked')
    if (info.menuItemId === '1') {
        (async () => {
            const response = chrome.tabs.sendMessage(tab.id, { message: 'get_text_selection' })
            console.log(response)
        })()
    }
});
export { }