// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
<<<<<<< HEAD
streets.addTo(map);


// City markers
cities = [];
cities.push({ coord: [40.7648, -73.9808], name: "New York" });
cities.push({ coord: [41.881832, -87.623177], name: "Chicago" });
cities.push({ coord: [29.749907, -95.358421], name: "Houston" });
cities.push({ coord: [34.052235, -118.243683], name: "L.A." });
cities.push({
    coord: [41.257160, -95.995102],
    name: "Omaha"
});
// Add code to create a marker for each city below and add it to the map
cities.forEach(city => {
    L.marker(city.coord, {
        draggable: false,
    }).addTo(map).bindPopup(city.name + " is at " + city.coord)
});
=======
streets.addTo(map);
>>>>>>> b80024b2e2107df52230ac84b4a09df4ad2b5202
