ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32537").setExtent([31015.997695, 9944213.967397, 123573.455954, 10000016.040446]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_health_1 = new ol.format.GeoJSON();
var features_health_1 = format_health_1.readFeatures(json_health_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32537'});
var jsonSource_health_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_health_1.addFeatures(features_health_1);cluster_health_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_health_1
});
var lyr_health_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_health_1, 
                style: style_health_1,
                interactive: true,
                title: '<img src="styles/legend/health_1.png" /> health'
            });
var format_Nakuru_2 = new ol.format.GeoJSON();
var features_Nakuru_2 = format_Nakuru_2.readFeatures(json_Nakuru_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32537'});
var jsonSource_Nakuru_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nakuru_2.addFeatures(features_Nakuru_2);
var lyr_Nakuru_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nakuru_2, 
                style: style_Nakuru_2,
                interactive: true,
                title: '<img src="styles/legend/Nakuru_2.png" /> Nakuru'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_health_1.setVisible(true);lyr_Nakuru_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_health_1,lyr_Nakuru_2];
lyr_health_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'F_NAME': 'F_NAME', 'PROV': 'PROV', 'DIST': 'DIST', 'DIVISION': 'DIVISION', 'LOCATION': 'LOCATION', 'SUB_LOCATI': 'SUB_LOCATI', 'F_TYPE': 'F_TYPE', 'AGENCY': 'AGENCY', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'MLFCode': 'MLFCode', 'filter_1': 'filter_1', 'elevation': 'elevation', });
lyr_Nakuru_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Male': 'Male', 'Female': 'Female', 'TotalPop': 'TotalPop', 'Code': 'Code', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'District': 'District', 'NAME': 'NAME', });
lyr_health_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'F_NAME': 'TextEdit', 'PROV': 'TextEdit', 'DIST': 'TextEdit', 'DIVISION': 'TextEdit', 'LOCATION': 'TextEdit', 'SUB_LOCATI': 'TextEdit', 'F_TYPE': 'TextEdit', 'AGENCY': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'MLFCode': 'TextEdit', 'filter_1': 'TextEdit', 'elevation': 'TextEdit', });
lyr_Nakuru_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'TotalPop': 'TextEdit', 'Code': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'District': 'TextEdit', 'NAME': 'TextEdit', });
lyr_health_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'F_NAME': 'inline label', 'PROV': 'inline label', 'DIST': 'inline label', 'DIVISION': 'inline label', 'LOCATION': 'no label', 'SUB_LOCATI': 'inline label', 'F_TYPE': 'inline label', 'AGENCY': 'no label', 'LONGITUDE': 'no label', 'LATITUDE': 'no label', 'MLFCode': 'no label', 'filter_1': 'no label', 'elevation': 'no label', });
lyr_Nakuru_2.set('fieldLabels', {'OBJECTID': 'no label', 'Male': 'inline label', 'Female': 'inline label', 'TotalPop': 'no label', 'Code': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'District': 'header label', 'NAME': 'inline label', });
lyr_Nakuru_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});