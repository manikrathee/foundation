/*
 * scripts.js
 *
 * auto-concatenated jquery, symbolset and custom alternate files
 *
 */

//@codekit-prepend "libs/ss-standard.js", "libs/ss-social.js", "foundation/foundation.js", "foundation/foundation.alerts.js",  "foundation/foundation.clearing.js", "foundation/foundation.cookie.js", "foundation/foundation.dropdown.js", "foundation/foundation.forms.js", "foundation/foundation.joyride.js", "foundation/foundation.magellan.js", "foundation/foundation.orbit.js", "foundation/foundation.placeholder.js", "foundation/foundation.reveal.js", "foundation/foundation.section.js", "foundation/foundation.tooltips.js", "foundation/foundation.topbar.js";

// "libs/jquery-1.7.1.min.js"

var win   = $(window);
var doc   = $(document);
var body  = $('body');
var $self = $(this);


// Google Analytics
var googleAnalyticsID = 'UA-';

var _gaq = _gaq || [];
_gaq.push(['_setAccount', googleAnalyticsID]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();