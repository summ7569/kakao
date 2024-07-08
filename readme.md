<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>여러개 마커 표시하기</title>
    
</head>
<body>
<div id="map" style="width:4961px;height:3508px;"></div>

<p>
    <button onclick="panTo()"> 부림동 </button>   // () 사이 해당 위도,경도로 부드럽게 이동
</p>
	
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=da010f91e59f856e4b8d54937ba756b6"></script>
<script>
var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.640528, 126.758011), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
	
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.
	
<script>
function setCenter() {   //이동할 위도 경도 위치를 생성
	var moveLatLon = new kakao.maps.LatLng(,);

	map.panTo(moveLatLon);  //지도를 부드럽게 이동
	

//카카오맵 클릭 이벤트 추가
	kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
	//클릭한 위도, 경도 정보 불러오기
	const latlng = mouseEvent.latLng;
	//마커 위치를 클릭한 위치로 이동
	marker.setPosition(latlng);
	marker.setMap(map);
	
	alert(`위도 : ${latlng.getLat()}, 경도 : ${latlng.getLng()}`);
});
	
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
      
          {
        content: '<div style="font-size:10px;">장항동 537-52</div>',
        latlng: new kakao.maps.LatLng(37.640528, 126.758011) // 좌표
      },
    {
       content: '<div style="font-size:10px;">송포동 1932-119</div>',
        latlng: new kakao.maps.LatLng(37.651591, 126.736226) // 좌표
      },
    {
        content: '<div style="font-size:10px;">능곡동 809-9</div>',
        latlng: new kakao.maps.LatLng(37.614787, 126.801253) // 좌표
      },
    {
       content: '<div style="font-size:10px;">대덕동 772-9</div>',
        latlng: new kakao.maps.LatLng(37.593852, 126.833182) // 좌표
      },
    {
       content: '<div style="font-size:10px;">대덕동 425-28</div>',
        latlng: new kakao.maps.LatLng(37.579153, 126.859843) // 좌표
      },
    {
       content: '<div style="font-size:10px;">대덕동 691-8 </div>',
        latlng: new kakao.maps.LatLng(37.585272, 126.843694) // 좌표
      },
    {
       content: '<div style="font-size:10px;">행주동 214</div>',
        latlng: new kakao.maps.LatLng(37.604070, 126.816877) // 좌표
      }
 
    

    
    
    

  
];
    var imageSrc="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    var bounds = new kakao.maps.LatLngBounds();

    
for (var i = 0; i < positions.length; i ++) {
   
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(25, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        image : markerImage
      
            
    });
    bounds.extend(positions[i].latlng);

    
    //마커에 표시할 인포윈도우 생성
    var infowindow=new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    
    // 마커에 mouseover 이벤트와 mouse out 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다
    // for 문에서 클ㄹ저를 만들지않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    }
   
    map.setBounds(bounds);
    
    // 인포윈도우 표시하는 클로저 함수
    function makeOverListener(map, marker, infowindow) {
        return function() {
            infowindow.open(map, marker);
        };
    }
    
</script>
</body>
</html>
