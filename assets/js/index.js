/*!
 * Custom Javascript
 *
 * Updated: 20170327
 */


 // Sticky Nav
 // Hide Header on on scroll down
 var didScroll;
 var lastScrollTop = 0;
 var delta = 5;
 var navbarHeight = $('header').outerHeight();

 $(window).scroll(function(event){
     didScroll = true;
 });

 setInterval(function() {
     if (didScroll) {
         hasScrolled();
         didScroll = false;
     }
 }, 250);

 function hasScrolled() {
     var st = $(this).scrollTop();

     // Make sure they scroll more than delta
     if(Math.abs(lastScrollTop - st) <= delta)
         return;

     // If they scrolled down and are past the navbar, add class .nav-up.
     // This is necessary so you never see what is "behind" the navbar.
     if (st > lastScrollTop && st > navbarHeight){
         // Scroll Down
         $('header').removeClass('nav-down').addClass('nav-up');
     } else {
         // Scroll Up
         if(st + $(window).height() < $(document).height()) {
             $('header').removeClass('nav-up').addClass('nav-down');
         }
     }

     lastScrollTop = st;
 }

/* Header Text Swap Animation */
(function($) {
  var duration = 3000;  // change this to change rotation time in milliseconds
  var current = 4;
  var jellyhead = $(".jellyhead");
  var height = jellyhead.height();
  var number = jellyhead.children().length;
  var first = jellyhead.children().first();

  setInterval(function() {
    var interv = current * -1 * height;
    first.css("margin-top", interv + "px");
    if (current == number) {
      first.css("margin-top", "0px");
      current = 1;
    } else {
      current++;
    }
  }, duration);
})(jQuery);


$(document).ready(function() {
    $('a[href="' + this.location.pathname + '"]').parent().addClass('active');
});


// Blur Up Img on load


window.onload = function loadStuff() {
  var win, doc, img, header, enhancedClass;
  // Quit early if older browser (e.g. IE8).
  if (!('addEventListener' in window)) {
    return;
  }

  win = window;
  doc = win.document;
  img = new Image();
  header = doc.querySelector('.post-header');
  enhancedClass = 'post-header-enhanced';

  // Rather convoluted, but parses out the first mention of a background
  // image url for the enhanced header, even if the style is not applied.
  var bigSrc = (function() {
    // Find all of the CssRule objects inside the inline stylesheet
    var styles = doc.querySelector('style').sheet.cssRules;
    // Fetch the background-image declaration...
    var bgDecl = (function() {
      // ...via a self-executing function, where a loop is run
      var bgStyle, i, l = styles.length;
      for (i = 0; i < l; i++) {
        // ...checking if the rule is the one targeting the
        // enhanced header.
        if (styles[i].selectorText &&
          styles[i].selectorText == '.' + enhancedClass) {
          // If so, set bgDecl to the entire background-image
          // value of that rule
          bgStyle = styles[i].style.backgroundImage;
          // ...and break the loop.
          break;
        }
      }
      // ...and return that text.
      return bgStyle;
    }());
    // Finally, return a match for the URL inside the background-image
    // by using a fancy regex i Googled up, if the bgDecl variable is
    // assigned at all.
    return bgDecl && bgDecl.match(/(?:\(['|"]?)(.*?)(?:['|"]?\))/)[1];
  }());

  // Assign an onLoad handler to the dummy image *before* assigning the src
  img.onload = function() {
    header.className += ' ' + enhancedClass;
  };
  // Finally, trigger the whole preloading chain by giving the dummy
  // image its source.
  if (bigSrc) {
    img.src = bigSrc;
  }
};

// Inject Classes into svg

window.onload = function(){

        //apply embed css to the svg object
        $("#prod_mobile-oval").setSVGStyle("margin-top:2000px;");

};
