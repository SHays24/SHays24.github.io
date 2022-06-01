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
const wrapper = document.querySelector(".window");

const header = wrapper.querySelector(".title-bar");

header.addEventListener("mousedown", function() {
    document.onmousemove = function(e) {
        var x = e.clientX;
        var y = e.clientY;
        wrapper.position = "relative";
        wrapper.style.left = x + "px";
        wrapper.style.top = y + "px";
    };
});

document.addEventListener("mouseup", function() {
    document.onmousemove = null;
});
