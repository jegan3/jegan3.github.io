/*!
 * Custom Javascript
 *
 * Updated: 20170327
 */

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

function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	var $word = $("path#word");
	var $dot = $("path#dot");

	// prepare SVG
	pathPrepare($word);
	pathPrepare($dot);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
		.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);


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
