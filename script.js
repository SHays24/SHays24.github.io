var x, y, target = null;
document.addEventListener('mousedown', function(e) {
  var clickedDragger = false;
  for(var i = 0; e.path[i] !== document.body; i++) {
    if (e.path[i].classList.contains("title-bar")) {
      clickedDragger = true;
    }
    else if (clickedDragger && e.path[i].classList.contains('window')) {
      target = e.path[i];
      target.classList.add('dragging');
      x = e.clientX - target.style.left.slice(0, -2);
      y = e.clientY - target.style.top.slice(0, -2);
      return;
    }
  }
});
document.addEventListener('mousemove', function(e) {
  if (target === null) return;
  target.style.left = e.clientX - x + 'px';
  target.style.top = e.clientY - y + 'px';
  var pRect = target.parentElement.getBoundingClientRect();
  var tgtRect = target.getBoundingClientRect();
  if (tgtRect.left < pRect.left) target.style.left = 0;
  if (tgtRect.top < pRect.top) target.style.top = 0;
  if (tgtRect.right > pRect.right) target.style.left = pRect.width - tgtRect.width + 'px';
  if (tgtRect.bottom > pRect.bottom) target.style.top = pRect.height - tgtRect.height + 'px';
});
document.addEventListener('mouseup', function() {
  if (target !== null) target.classList.remove('dragging');
  target = null;
  return;
});
window.fncShowHideList = function() {
    //alert('it ran: ');
    if (document.getElementById('tab1').getAttribute('class') === 'active') {
      document.getElementById('tab1').setAttribute('class', 'minimized');     
      document.getElementById('window').style.display = 'none';
    } else {
        document.getElementById('tab1').setAttribute('class', 'active');
      document.getElementById('window').style.display = '';
  };
};
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

// Code to handle install prompt on desktop
/*
let deferredPrompt;
const addBtn = document.querySelector('add-button');


window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen


  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button

    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});
window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
  // Clear the deferredPrompt so it can be garbage collected
  window.deferredPrompt = null;
});*/
