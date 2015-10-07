// create a self var to pass to our controller functions
            var self = this;

            this.element.addEventListener( 'mousemove', this.onMouseMove.bind(this), false );
            this.element.addEventListener( 'mousewheel', this.onMouseWheel.bind(this), false );
            this.element.addEventListener( 'DOMMouseScroll', this.onMouseWheel.bind(this), false );
            this.element.addEventListener( 'mousedown', this.onMouseDown.bind(this), false);
            this.element.addEventListener( 'mouseup', this.onMouseUp.bind(this), false);
      


    onMouseMove: function(event) {
            this._onPointerDownPointerX = event.clientX;
            this._onPointerDownPointerY = -event.clientY;

            this._onPointerDownLon = this._lon;
            this._onPointerDownLat = this._lat;

            var x, y;

            if(this.options.clickAndDrag) {
                if(this._mouseDown) {
                    x = event.pageX - this._dragStart.x;
                    y = event.pageY - this._dragStart.y;
                    this._dragStart.x = event.pageX;
                    this._dragStart.y = event.pageY;
                    this._lon += x;
                    this._lat -= y;
                }
            } else {
                x = event.pageX - $(this.element).find('canvas').offset().left;
                y = event.pageY - $(this.element).find('canvas').offset().top;
                this._lon = ( x / $(this.element).find('canvas').width() ) * 430 - 225;
                this._lat = ( y / $(this.element).find('canvas').height() ) * -180 + 90;
            }
            
        }, 

        onMouseWheel: function(event) {

            var wheelSpeed = -0.01;

            // WebKit
            if ( event.wheelDeltaY ) {
                this._fov -= event.wheelDeltaY * wheelSpeed;
            // Opera / Explorer 9
            } else if ( event.wheelDelta ) {
                this._fov -= event.wheelDelta * wheelSpeed;
            // Firefox
            } else if ( event.detail ) {
                this._fov += event.detail * 1.0;
            }

            var fovMin = 3;
            var fovMax = 100;

            if(this._fov < fovMin) {
                this._fov = fovMin;
            } else if(this._fov > fovMax) {
                this._fov = fovMax;
            }

            this._camera.setLens(this._fov);
            event.preventDefault();
        },

        onMouseDown: function(event) {
            this._mouseDown = true;
            this._dragStart.x = event.pageX;
            this._dragStart.y = event.pageY;
        },

        onMouseUp: function() {
            this._mouseDown = false;
        },