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

export { }