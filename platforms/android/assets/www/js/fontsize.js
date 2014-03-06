/*!
 *  jscript routine to change font size within the page
 *  written by Barry Sharpen
 *  
 *  v0.1 05/03/2014
 *    
 */



// device apis are available
function onDeviceReady() {
	// empty
}

function showAlert() {
	navigator.notification.alert(
       'Message box please disply', // message
       altertDismissed,             // no callback
       'Message Box Title',         // title
       'Continue'                   // button texr
	);
}

function displayLargeFont() {
	$(".txtwrapper").css('font-size', '1.2em');
}


