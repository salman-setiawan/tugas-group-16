const params = new URLSearchParams(window.location.search);
import { getTourismById, getCulinaryById, getLodgingById } from "./helper.js";

let category = params.get("post_category");
console.log(category)
let id = params.get("post_id");
let longitude;
let latitude;

if(category === "tourism"){
    let post = await getTourismById(id);
    longitude = post.longitude;
    latitude = post.latitude;
}
else if(category === "hotels" || category === "resorts" || category === "villas"){
    console.log("Masuk");
    longitude = post.longitude;
    latitude = post.latitude;
}
else if(category === "street food" || category === "restaurant" || category === "coffee shop"){
    longitude = post.longitude;
    latitude = post.latitude;
}

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWlzZW5mbHV4IiwiYSI6ImNrcmhjbW9hbDZmYnIyb3BheXVpamFndXMifQ.KyX8i7FSbtcx36_5mkxW4g";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [longitude, latitude],
  zoom: 15,
});

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [
            longitude, latitude,
        ],
      },
      properties: {
        title: "Washington, D.C",
        description: "Tourism",
      },
    },
  ],
};

for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
    )
    .addTo(map);
}
