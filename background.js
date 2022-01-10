

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.action === 'updateIcon') {
    if (msg.value) {
      chrome.action.setIcon({path: '/images/green.png'});
    } else {
      chrome.action.setIcon({path: '/images/red.png'});
    }
  }
});
