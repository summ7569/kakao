var mapContainer = document.getElementById('map');
var mapOption = {
    center: new kakao.maps.LatLng(37.5665, 126.9780),
    level: 3
};
var map = new kakao.maps.Map(mapContainer, mapOption);

var categories = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

var categoryData = {
    'A': { name: '갈현동', lat: 37.639, lng: 126.834 },
    'B': { name: '과천동', lat: 37.429, lng: 126.996 },
    'C': { name: '문원동', lat: 37.428, lng: 127.008 },
    'D': { name: '별양동', lat: 37.426, lng: 126.994 },
    'E': { name: '부림동', lat: 37.429, lng: 127.000 },
    'F': { name: '주암동', lat: 37.430, lng: 127.013 },
    'G': { name: '중앙동', lat: 37.433, lng: 126.999 },
    'H': { name: '기타', lat: 37.440, lng: 127.002 },
    'I': { name: '회전형', filter: 'rotation', minCount: 1, imageUrl: "https://via.placeholder.com/120" },
    'J': { name: '고정형', filter: 'fixed', minCount: 1, imageUrl: "https://via.placeholder.com/120" },
    'K': { name: '전부', includeAll: true }
};

var Apositions = [
    { category: '갈현동', lat: 37.639, lng: 126.834 }
];
var AInfo = [
    {
        number: "HP-111",
        address: "갈현동",
        rotation: 1,
        fixed: 5,
        description: "갈현동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Bpositions = [
    { category: '과천동', lat: 37.429, lng: 126.996 }
];
var BInfo = [
    {
        number: "HP-112",
        address: "과천동",
        rotation: 2,
        fixed: 3,
        description: "과천동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Cpositions = [
    { category: '문원동', lat: 37.428, lng: 127.008 }
];
var CInfo = [
    {
        number: "HP-113",
        address: "문원동",
        rotation: 3,
        fixed: 2,
        description: "문원동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Dpositions = [
    { category: '별양동', lat: 37.426, lng: 126.994 }
];
var DInfo = [
    {
        number: "HP-114",
        address: "별양동",
        rotation: 0,
        fixed: 4,
        description: "별양동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Epositions = [
    { category: '부림동', lat: 37.429, lng: 127.000 }
];
var EInfo = [
    {
        number: "HP-115",
        address: "부림동",
        rotation: 1,
        fixed: 3,
        description: "부림동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Fpositions = [
    { category: '주암동', lat: 37.430, lng: 127.013 }
];
var FInfo = [
    {
        number: "HP-116",
        address: "주암동",
        rotation: 0,
        fixed: 2,
        description: "주암동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Gpositions = [
    { category: '중앙동', lat: 37.433, lng: 126.999 }
];
var GInfo = [
    {
        number: "HP-117",
        address: "중앙동",
        rotation: 2,
        fixed: 1,
        description: "중앙동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Hpositions = [
    { category: '기타', lat: 37.440, lng: 127.002 }
];
var HInfo = [
    {
        number: "HP-118",
        address: "기타",
        rotation: 1,
        fixed: 0,
        description: "기타 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var positions = Apositions.concat(Bpositions, Cpositions, Dpositions, Epositions, Fpositions, Gpositions, Hpositions);

var info = AInfo.concat(BInfo, CInfo, DInfo, EInfo, FInfo, GInfo, HInfo);

var markerIndex = 0;
var markers = [];

function createMarkersAndOverlays() {
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
    markers = [];

    positions.forEach(function(position, catIndex) {
        var markerPosition = new kakao.maps.LatLng(position.lat, position.lng);

        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        markers.push(marker);

        var infowindow = new kakao.maps.InfoWindow({
            content: '<div class="infoWindow">' + info[catIndex].number + '</div>',
            removable: true
        });

        kakao.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
            closeAllCustomOverlays();
            showCustomOverlay(position, catIndex);
        });

        marker.setMap(map);
        markerIndex++;
    });
}

function closeAllCustomOverlays() {
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
}

function showCustomOverlay(position, catIndex) {
    var overlayContent =
        '<div class="customOverlay">' +
        '    <div class="title">' + position.category + '</div>' +
        '    <div class="desc">' +
        '        <div class="desc-content">' +
        '            <img src="' + info[catIndex].image + '" width="50" height="50">' +
        '            <p>관리번호 : ' + info[catIndex].number + '</p>' +
        '            <p>주소 : ' + info[catIndex].address + '</p>' +
        '            <p>회전형 : ' + info[catIndex].rotation + '</p>' +
        '            <p>고정형 : ' + info[catIndex].fixed + '</p>' +
        '            <p>상세설명 : ' + info[catIndex].description + '</p>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    var customOverlay = new kakao.maps.CustomOverlay({
        content: overlayContent,
        map: map,
        position: new kakao.maps.LatLng(position.lat, position.lng),
        yAnchor: 1
    });

    customOverlay.setMap(map);
}

var categoryButtons = document.getElementById('categoryButtons');

categories.forEach(function(category) {
    var button = document.createElement('button');
    button.textContent = category;
    button.addEventListener('click', function() {
        if (category === 'K') {
            createMarkersAndOverlays();
        } else {
            if (categoryData[category].includeAll) {
                createMarkersAndOverlays();
            } else if (categoryData[category].filter && categoryData[category].minCount) {
                var filterKey = categoryData[category].filter;
                var minCount = categoryData[category].minCount;

                positions.forEach(function(position, catIndex) {
                    var count = info[catIndex][filterKey];
                    if (count >= minCount) {
                        showCustomOverlay(position, catIndex);
                    }
                });
            }
        }
    });
    categoryButtons.appendChild(button);
});

createMarkersAndOverlays();
