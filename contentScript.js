

const mapElement = document.getElementById('map');
if (mapElement) {
  mapElement.style.height = '100%';
  console.log('Map container is set to full!');

  chrome.runtime.sendMessage({
    action: 'updateIcon',
    value: true
  });
} else {
  chrome.runtime.sendMessage({
    action: 'updateIcon',
    value: false
  });
}
