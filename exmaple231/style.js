{
options:
{
  attribution: 'FIXME',minZoom: 2,maxNativeZoom: 2, maxZoom: 18
},
geojsonOptions:
{
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, {
      radius: 6, color : '#f00', opacity: 0.8, 
      fillOpacity: 0.8, fillColor: '#f55'
    });
  },
  onEachFeature: function(feature, layer) {
    var s = '<div class="popup">' + feature.properties['Name'] + '</div>';
    layer.bindPopup(s);
  }
}
}
