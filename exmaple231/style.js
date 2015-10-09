{
options:
{
  attribution: '単写真',minZoom: 15,maxNativeZoom: 14, maxZoom: 18
},
geojsonOptions:
{
         pointToLayer: function(feature, latlng) {
           var data = feature.properties["撮影年月日"].split("-");
           var dataclass = "pp" + Math.floor(Number(data[0])/10)*10;
           return L.circleMarker(latlng, {
               radius: 6, 
               color : '#f00',
               opacity: 0.8,
               fillOpacity: 0.8,
               fillColor: '#f55',
               className: dataclass
           });
         },
         onEachFeature: function(feature, layer) {
           var s = '<div class="popup">';
           for(var k in feature.properties) {
             if(k == "ID"){continue;}
             var v = feature.properties[k];
             if(v == "1111-11-11"){v="不明";}
             s += k + ': ' + v + '<br>';
           }
           s += " <a href=\'http://mapps.gsi.go.jp/map-lib-api/apiContentsView.do?specificationId="+feature.properties["ID"]+"\' target='_blank'>写真を表示</a>　";
           s += '<br></div>';
           layer.bindPopup(s);
         }
}
}
