# VR-project

Accomplished: 
<ul>
<li>360 video player with mouse directioning
</ul>

To do: 
<ul>
<li>modify player controls
<li>add a menu
<li>get Oculus working, Cardboard
</ul>


<p>what I've figured out:</p>
<p>For Oculus to work, we need two THREE PerspectiveCameras, one for the left eye and one for the right. The current iteration of the renderer uses only one THREE PerspectiveCamera, declared on line 193 of the main js file.</p>
<p>Properties and functions of these cameras can be found in VREffect.js from <a href="https://github.com/toji/webvr-test">this repo</a>.</p>
<p><strong>currently attempting to add an extra camera to current iteration...</strong>
