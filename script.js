const mypreloader = document.querySelector('.preloader');
const fadeOutEffect = mypreloader.remove();
window.addEventListener('load', fadeOutEffect);
window.fncShowHideList = function(x) {
    //alert('it ran: ');
    if (x === 3) {
      if (document.getElementById('start').getAttribute('class') === 'active') {
        document.getElementById('start').setAttribute('class', 'minimized');     
        document.getElementById('window-start').style.display = 'none';
      } else { document.getElementById('start').setAttribute('class', 'active');
        document.getElementById('window-start').style.display = '';
      };
    }
    else if (document.getElementById('tab'+x).getAttribute('class') === 'active') {
      document.getElementById('tab'+x).setAttribute('class', 'minimized');     
      document.getElementById('window'+x).style.display = 'none';
    } else { document.getElementById('tab'+x).setAttribute('class', 'active');
      document.getElementById('window'+x).style.display = '';
  };
};
const wrapper1 = document.querySelector("#window1");
const wrapper2 = document.querySelector("#window2");
const header1 = wrapper1.querySelector("#titlebar1");
const header2 = wrapper2.querySelector("#titlebar2");
header1.addEventListener("mousedown", function() {
    document.onmousemove = function(e) {
        var x = e.clientX;
        var y = e.clientY;
        wrapper1.position = "relative";
        wrapper1.style.left = x + "px";
        wrapper1.style.top = y + "px";
    };
});
header1.addEventListener("touchstart", function() {
    document.onmousemove = function(e) {
        var x = e.clientX;
        var y = e.clientY;
        wrapper1.position = "relative";
        wrapper1.style.left = x + "px";
        wrapper1.style.top = y + "px";
    };
});
header2.addEventListener("mousedown", function() {
    document.onmousemove = function(e) {
        var x = e.clientX;
        var y = e.clientY;
        wrapper2.position = "relative";
        wrapper2.style.left = x + "px";
        wrapper2.style.top = y + "px";
    };
});
header2.addEventListener("touchstart", function() {
    document.onmousemove = function(e) {
        var x = e.clientX;
        var y = e.clientY;
        wrapper2.position = "relative";
        wrapper2.style.left = x + "px";
        wrapper2.style.top = y + "px";
    };
});
document.addEventListener("mouseup", function() {
    document.onmousemove = null;
});
document.addEventListener("touchend", function() {
    document.onmousemove = null;
});
window1.addEventListener("mousedown", function() {
  document.getElementById("window1").setAttribute('class', 'focus window');
  document.getElementById("window2").setAttribute('class', 'unfocus window');
});
window2.addEventListener("mousedown", function() {
  document.getElementById("window2").setAttribute('class', 'focus window');
  document.getElementById("window1").setAttribute('class', 'unfocus window');
});
