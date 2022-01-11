'use strict';

closeStream();

const mapElement = document.getElementById('map');
if (mapElement) {
  scaleUpMap(mapElement);

  chrome.runtime.sendMessage({
    action: 'updateIcon',
    value: true
  });
} else {
  console.log('Map container not found');
  chrome.runtime.sendMessage({
    action: 'updateIcon',
    value: false
  });
}


function scaleUpMap(mapElement) {
  // calc because tarkov.help layout is SHIT!
  mapElement.style.height = 'calc(100% - 43px)';
  console.log('Map container is set to full!');
}

function closeStream() {
  console.log('Closing not Nikita\'s stream because other streams are shit!');
  const streamWidgetEl = document.querySelector('#stream-widget');
  if (!streamWidgetEl) {
    console.warn('Shitty stream widget not found!');
    return;
  }
  const closeBtnEl = streamWidgetEl.querySelector('#close-btn');
  if (!closeBtnEl) {
    console.log('Seams like shitty stream is already closed');
    return;
  }
  closeBtnEl.click();
  console.log('Shitty stream closed');
}
