export function style(feature) {
  console.log("being called?");
  return {
    fillColor: "#005a32",
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}

export function highlightFeature(e) {}

// export function onEachFeature(feature, layer) {
//   layer.on({
//     mouseover: highlightFeature,
//     mouseout: resetHighlight,
//     click: handleProvinceClick,
//   });
// }
