/**
 * @author dmarcos / https://github.com/dmarcos
 *
 * It handles stereo rendering
 * If mozGetVRDevices and getVRDevices APIs are not available it gracefuly falls back to a
 * regular renderer
 *
 * The HMD supported is the Oculus DK1 and The Web API doesn't currently allow
 * to query for the display resolution (only the chrome API allows it).
 * The dimensions of the screen are temporarly hardcoded (1280 x 800).
 *
 * For VR mode to work it has to be used with the Oculus enabled builds of Firefox or Chrome:
 *
 * Firefox:
 *
 * http://mozvr.com/downloads.html
 *
 * Chrome builds:
 *
 * https://drive.google.com/a/google.com/folderview?id=0BzudLt22BqGRbW9WTHMtOWMzNjQ&usp=sharing#list
 *
 */
THREE.VREffect = function ( renderer, done ) {

	var cameraLeft = new THREE.PerspectiveCamera();
	var cameraRight = new THREE.PerspectiveCamera();

	this._renderer = renderer;

};