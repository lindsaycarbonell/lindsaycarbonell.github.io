      //for directions
      var directionsDisplay;
      var directionsService = new google.maps.DirectionsService();


      var phoenix = new google.maps.LatLng(33.678899 , -111.8835441);
      var lasvegas = new google.maps.LatLng(36.0395247, -114.9817213);
      var modesto = new google.maps.LatLng(37.6293616, -120.99883080000001);
      var dallas = new google.maps.LatLng(32.7554235,-97.01211790000002);
      var houston = new google.maps.LatLng(30.1434262,-95.47309139999999);
      var sacramento = new google.maps.LatLng(38.7521235,-121.28800590000003);
    var fresno = new google.maps.LatLng(36.7468422,-119.7725868);
    var bakersfield = new google.maps.LatLng(35.3732921,-119.01871249999999);
    var visalia = new google.maps.LatLng(36.3302284,-119.2920585);
    var losangeles = new google.maps.LatLng(34.0522342,-118.2436849);



      var map;
      var center = new google.maps.LatLng(36.52729501,-102.744141);


      //basic map options
      var mapOptions = {
        center: center,
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      //basic map variable
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      
      //image variables for map icons
      var homeImg = 'assets/home.png';
      var carImg = 'assets/car.png';
      var poolImg = 'assets/pool.png';
      var walkImg = 'assets/walk.png';
      var magnifyImg = 'assets/magnify.png';
      var icecreamImg = 'assets/icecream.png';
      //old popup box with image:
      //<div id="contentStart"><img id="logo" src="home.png"><div><b>644 Lake Hogan Lane</b><p class="inline"></p></div></div>

      //marker variables with attached icons
      var phoenixMarker = new google.maps.Marker({
          position: phoenix,
          map: map
          //,icon: homeImg
      });

      var lasVegasMarker = new google.maps.Marker({
          position: lasvegas,
          map: map
          //,icon: carImg
      });

      var modestoMarker = new google.maps.Marker({
          position: modesto,
          map: map
          //,icon: 
      });

      var dallasMarker = new google.maps.Marker({
          position: dallas,
          map: map
          //,icon: walkImg
      });

      var houstonMarker = new google.maps.Marker({
          position: houston,
          map: map
          //,icon: magnifyImg
      });

      var sacramentoMarker = new google.maps.Marker({
          position: sacramento,
          map: map
          //,icon: icecreamImg
      });

      var fresnoMarker = new google.maps.Marker({
          position: fresno,
          map: map
          //,icon: icecreamImg
      });

     var bakersfieldMarker = new google.maps.Marker({
          position: bakersfield,
          map: map
          //,icon: icecreamImg
      });

     var visaliaMarker = new google.maps.Marker({
          position: visalia,
          map: map
          //,icon: icecreamImg
      });

     var losangelesMarker = new google.maps.Marker({
          position: losangeles,
          map: map
          //,icon: icecreamImg
      });

      //MAIN POPUP
      var bigBox = new google.maps.InfoWindow({
        content: "Empty"
      });



      function initialize() {
        
        //listeners to open boxes when icons are clicked
          var carousel = $("#owl-slider");
        
          google.maps.event.addListener(phoenixMarker, 'click', function() {
            //console.log("marker");
            bigBox.setContent("Phoenix, Arizona");
            bigBox.open(map,phoenixMarker);
            carousel.trigger('owl.goTo', 2);
            
        });

           google.maps.event.addListener(lasVegasMarker, 'click', function() {
            bigBox.setContent("Las Vegas, Nevada");
            bigBox.open(map,lasVegasMarker);
            carousel.trigger('owl.goTo', 3);
            
        });

           google.maps.event.addListener(modestoMarker, 'click', function() {
            bigBox.setContent("Modesto, California");
            bigBox.open(map,modestoMarker);
            carousel.trigger('owl.goTo',4);
            
        });

           google.maps.event.addListener(dallasMarker, 'click', function() {
            bigBox.setContent("Dallas, Texas");
            bigBox.open(map,dallasMarker);
            carousel.trigger('owl.goTo', 5);
          
        });
          
           google.maps.event.addListener(houstonMarker, 'click', function() {
            bigBox.setContent("Houston, Texas");
            bigBox.open(map,houstonMarker);
            carousel.trigger('owl.goTo', 6);
            
        });
          
            google.maps.event.addListener(sacramentoMarker, 'click', function() {
            bigBox.setContent("Sacramento, California");
            bigBox.open(map,sacramentoMarker);
            carousel.trigger('owl.goTo', 7);
           
        });
          
              google.maps.event.addListener(fresnoMarker, 'click', function() {
            bigBox.setContent("Fresno, California");
            bigBox.open(map,fresnoMarker);
            carousel.trigger('owl.goTo', 8);
            
        });
          
              google.maps.event.addListener(bakersfieldMarker, 'click', function() {
            bigBox.setContent("Bakersfield, California");
            bigBox.open(map,bakersfieldMarker);
            carousel.trigger('owl.goTo', 9);
           
        });
          
              google.maps.event.addListener(visaliaMarker, 'click', function() {
            bigBox.setContent("Visalia, California");
            bigBox.open(map,visaliaMarker);
            carousel.trigger('owl.goTo', 10);
           
        });
          
              google.maps.event.addListener(losangelesMarker, 'click', function() {
            bigBox.setContent("Los Angeles, California");
            bigBox.open(map,losangelesMarker);
            carousel.trigger('owl.goTo', 11);
            
        });





        //recalculate center on window resize
        function calculateCenter(){
          center = map.getCenter();
        }

        google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
          });
      google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
          });
          google.maps.event.addDomListener(document.getElementById('map-canvas'),'click',function(){
          map.setCenter(center);
              console.log('centered');
          });

      }
      
      google.maps.event.addDomListener(window, 'load', initialize);



      
    
