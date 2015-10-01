tarheel-VR Web Player
================

The tarheel-VR player lets you watch 360 flat and stereo video on your Oculus Rift or Android device with VR headset (Cardboard, Durovis Dive, etc.) from a web browser. It is written with js, html5, and webGL.

tarheel-VR Web Player works with the native browser support currently being implemented by [Firefox](http://blog.bitops.com/blog/2014/06/26/first-steps-for-vr-on-the-web/) and [Chromium](https://www.google.com/chrome/browser/desktop/).



Videos shown in the player can be rotated using keyboard controls  (a/d, w/s, and q/e), as well as by the Oculus Rift if you are running an experimental webVR browser. You may be able to decrease video judder by setting your Oculus Display refresh rate to 60 Hz (the browser refreshes at 60 Hz and the slower mismatch can cause judder).

#### [Live Demo](http://ask-media.org/client_portal/vrdemo/) ####

The following table documents the keyboard controls currently available.

| Key | Control           |
|:-----:|-------------|
| p   | play/pause |
| l   | toggle looping |
| f   | full screen webVR mode (with barrel distortion) |
| g   | regular full screen mode (less lag) |
| w   | up |
| a   | left |
| s   | down |
| d   | right |
| q   | rotate left |
| e   | rotate right |

This implementation of a the eleVR Player was developed at [UNC Chapel Hill jSchool](http://mj.unc.edu/) by [Steven King](http://steventking.com) and Lindsay Carbonell. This project builds off of [eleVR](http://eleVR.com). eleVR is a project of the Communications Design Group and is supported by SAP. The contributors to the eleVR project are [@hawksley](https://github.com/hawksley) and [@amluto](https://github.com/amluto).



### Support ###
Using keyboard rotation controls, the player works on standard Firefox and Chrome on Windows, Mac, and Linux. It also runs on Safari (if webgl is enabled). I haven't tested it on other browsers.

Using Oculus headset controls, the player works on the experimental webVR builds of [Firefox](http://blog.bitops.com/blog/2014/06/26/first-steps-for-vr-on-the-web/) and [Chrome](https://drive.google.com/folderview?id=0BzudLt22BqGRbW9WTHMtOWMzNjQ&usp=sharing#list).

Using device orientation controls, it has historically worked on Chrome on Android, however Chrome recently hacked a fix to a security issue by marking all video as cross-origin. For more details on the current status on mobile devices, please check out the issues tab.


## Known Issues ##

You may run into issues playing video if your browser does not support HTML5 video of the type that you are using. For example, Firefox on Mac does not support mp4 video, but does support webm. You can check what video types are supported for your browser here: http://en.wikipedia.org/wiki/HTML5_video#Browser_support

###Oculus movement isn't being recognized###
Make sure that you are using an experimental webVR version of the browser. If it still isn't being recognized, you can try restarting the browser and plugging/unplugging your device.

## UNC Future Work ##
The following is a short subset of planned future work on the UNC implementation.
- Add LeapMotion support for Gesture control.
- Add Menu for selecting different experiences.


## 3rd party libraries ##
The following assets are used by the eleVR Player:

- glMatrix - Similar to MIT License - http://glmatrix.net/
- Font Awesome - MIT License - http://fortawesome.github.io/Font-Awesome/
