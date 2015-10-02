


//
// A helper function to toggle a help tip
// about how to hide Safari address bar when it's visible
// Monitors only landscape mode and works on Safari on iOS 8+
//
var attachMobileSafariAddressBarHelpTip = function (target) {
    var $target = $(target);
    $target.tooltip({
        title: 'Scroll up to hide Safari address bar',
        trigger: 'manual',
        placement: 'bottom'
    });
    $(window).on('resize', function () {
        var bodyHeight = document.body.offsetHeight;
        var windowHeight = window.innerHeight;
        var isLandscape = Math.abs(window.orientation) === 90;
        var showTooltip = (windowHeight < bodyHeight);
        if(!isLandscape) return;
        $target.tooltip(showTooltip ? 'show' : 'hide');
    });
}
var ua = window.navigator.userAgent;
if(ua.indexOf('iPhone') !== -1 && ua.indexOf('Safari') !== -1) {
    attachMobileSafariAddressBarHelpTip('#main-nav');
}