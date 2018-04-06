window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("sticky-nav").style.top = "0";
  } else {
    document.getElementById("sticky-nav").style.top = "-80px";
  }
}
