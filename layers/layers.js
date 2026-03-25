var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_COMM_REG_NANDO_1 = new ol.format.GeoJSON();
var features_COMM_REG_NANDO_1 = format_COMM_REG_NANDO_1.readFeatures(json_COMM_REG_NANDO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMM_REG_NANDO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMM_REG_NANDO_1.addFeatures(features_COMM_REG_NANDO_1);
var lyr_COMM_REG_NANDO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMM_REG_NANDO_1, 
                style: style_COMM_REG_NANDO_1,
                popuplayertitle: 'COMM_REG_NANDO',
                interactive: true,
                title: '<img src="styles/legend/COMM_REG_NANDO_1.png" /> COMM_REG_NANDO'
            });
var format_COMM_NANDO_2 = new ol.format.GeoJSON();
var features_COMM_NANDO_2 = format_COMM_NANDO_2.readFeatures(json_COMM_NANDO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMM_NANDO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMM_NANDO_2.addFeatures(features_COMM_NANDO_2);
var lyr_COMM_NANDO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMM_NANDO_2, 
                style: style_COMM_NANDO_2,
                popuplayertitle: 'COMM_NANDO',
                interactive: true,
    title: 'COMM_NANDO<br />\
    <img src="styles/legend/COMM_NANDO_2_0.png" /> 24 - 93<br />\
    <img src="styles/legend/COMM_NANDO_2_1.png" /> 93 - 163<br />\
    <img src="styles/legend/COMM_NANDO_2_2.png" /> 163 - 232<br />\
    <img src="styles/legend/COMM_NANDO_2_3.png" /> 232 - 302<br />\
    <img src="styles/legend/COMM_NANDO_2_4.png" /> 302 - 371<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_COMM_REG_NANDO_1.setVisible(true);lyr_COMM_NANDO_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_COMM_REG_NANDO_1,lyr_COMM_NANDO_2];
lyr_COMM_REG_NANDO_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_3': 'NAME_3', 'COMMUNE_NANDO CSV_Effectif': 'COMMUNE_NANDO CSV_Effectif', 'COMMUNE_NANDO CSV_SHAPE_Leng': 'COMMUNE_NANDO CSV_SHAPE_Leng', 'COMMUNE_NANDO CSV_SHAPE_Area': 'COMMUNE_NANDO CSV_SHAPE_Area', });
lyr_COMM_NANDO_2.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_3': 'NAME_3', 'COMMUNE_NA': 'COMMUNE_NA', 'COMMUNE__1': 'COMMUNE__1', 'COMMUNE__2': 'COMMUNE__2', 'Sup km²': 'Sup km²', 'DENSITE': 'DENSITE', });
lyr_COMM_REG_NANDO_1.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_3': 'TextEdit', 'COMMUNE_NANDO CSV_Effectif': 'Range', 'COMMUNE_NANDO CSV_SHAPE_Leng': 'TextEdit', 'COMMUNE_NANDO CSV_SHAPE_Area': 'TextEdit', });
lyr_COMM_NANDO_2.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_3': 'TextEdit', 'COMMUNE_NA': 'TextEdit', 'COMMUNE__1': 'TextEdit', 'COMMUNE__2': 'TextEdit', 'Sup km²': 'TextEdit', 'DENSITE': 'TextEdit', });
lyr_COMM_REG_NANDO_1.set('fieldLabels', {'COUNTRY': 'no label', 'NAME_3': 'no label', 'COMMUNE_NANDO CSV_Effectif': 'no label', 'COMMUNE_NANDO CSV_SHAPE_Leng': 'no label', 'COMMUNE_NANDO CSV_SHAPE_Area': 'no label', });
lyr_COMM_NANDO_2.set('fieldLabels', {'COUNTRY': 'no label', 'NAME_3': 'no label', 'COMMUNE_NA': 'no label', 'COMMUNE__1': 'no label', 'COMMUNE__2': 'no label', 'Sup km²': 'no label', 'DENSITE': 'no label', });
lyr_COMM_NANDO_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});