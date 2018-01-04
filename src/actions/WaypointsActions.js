// function getWaypoints(){
// 	    var latArray = []
//         var lngArray = []
//         var markerArray = []
//         var angle = 90
//         var numOfPoints = 6;
//         var degreesPerPoint = -5 /numOfPoints;
//         var x2;
//         var y2;
//         var range = 0.11
//         var lat = userLat
//         var lng = userLng

//         for(let i=0; i <= numOfPoints; i++){
//         x2 = Math.cos(angle) * range;
//         y2 = Math.sin(angle) * range;
//         newLat = lat+x2;
//         newLng = lng+y2;
//         // console.log(typeof newLat);
//         // console.log(newLng)

//         lat_lng = new google.maps.LatLng(newLat,newLng);
//         var marker = new google.maps.Marker({
//           position: lat_lng,
//           map: map,
//           // visibile: false
          
//         });
        
//         latArray.push(lat_lng.lat()); ////push lats of points we just looped through and placed on map
//         lngArray.push(lat_lng.lng());
//         markerArray.push(marker);
//         angle += degreesPerPoint;


//       }
//       return{
//       	type:'GET_WAYPOINTS',
//       	payload: "GO FALCONS"
//       }
// }


// export default getWaypoints