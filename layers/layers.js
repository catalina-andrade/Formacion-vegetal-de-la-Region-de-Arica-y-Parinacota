var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Provincia_1 = new ol.format.GeoJSON();
var features_Provincia_1 = format_Provincia_1.readFeatures(json_Provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincia_1.addFeatures(features_Provincia_1);
var lyr_Provincia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincia_1, 
                style: style_Provincia_1,
                popuplayertitle: 'Provincia',
                interactive: true,
                title: '<img src="styles/legend/Provincia_1.png" /> Provincia'
            });
var format_Formacinvegetal_2 = new ol.format.GeoJSON();
var features_Formacinvegetal_2 = format_Formacinvegetal_2.readFeatures(json_Formacinvegetal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formacinvegetal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formacinvegetal_2.addFeatures(features_Formacinvegetal_2);
var lyr_Formacinvegetal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formacinvegetal_2, 
                style: style_Formacinvegetal_2,
                popuplayertitle: 'Formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/Formacinvegetal_2.png" /> Formación vegetal'
            });
var format_Formacinvegetal_3 = new ol.format.GeoJSON();
var features_Formacinvegetal_3 = format_Formacinvegetal_3.readFeatures(json_Formacinvegetal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formacinvegetal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formacinvegetal_3.addFeatures(features_Formacinvegetal_3);
var lyr_Formacinvegetal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formacinvegetal_3, 
                style: style_Formacinvegetal_3,
                popuplayertitle: 'Formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/Formacinvegetal_3.png" /> Formación vegetal'
            });
var format_Formacinvegetal_4 = new ol.format.GeoJSON();
var features_Formacinvegetal_4 = format_Formacinvegetal_4.readFeatures(json_Formacinvegetal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formacinvegetal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formacinvegetal_4.addFeatures(features_Formacinvegetal_4);
var lyr_Formacinvegetal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formacinvegetal_4, 
                style: style_Formacinvegetal_4,
                popuplayertitle: 'Formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/Formacinvegetal_4.png" /> Formación vegetal'
            });
var format_Formacinvegetal_5 = new ol.format.GeoJSON();
var features_Formacinvegetal_5 = format_Formacinvegetal_5.readFeatures(json_Formacinvegetal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formacinvegetal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formacinvegetal_5.addFeatures(features_Formacinvegetal_5);
var lyr_Formacinvegetal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formacinvegetal_5, 
                style: style_Formacinvegetal_5,
                popuplayertitle: 'Formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/Formacinvegetal_5.png" /> Formación vegetal'
            });
var format_Formacinvegetal_6 = new ol.format.GeoJSON();
var features_Formacinvegetal_6 = format_Formacinvegetal_6.readFeatures(json_Formacinvegetal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formacinvegetal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formacinvegetal_6.addFeatures(features_Formacinvegetal_6);
var lyr_Formacinvegetal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formacinvegetal_6, 
                style: style_Formacinvegetal_6,
                popuplayertitle: 'Formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/Formacinvegetal_6.png" /> Formación vegetal'
            });
var format_Formacinvegetal_7 = new ol.format.GeoJSON();
var features_Formacinvegetal_7 = format_Formacinvegetal_7.readFeatures(json_Formacinvegetal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formacinvegetal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formacinvegetal_7.addFeatures(features_Formacinvegetal_7);
var lyr_Formacinvegetal_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formacinvegetal_7, 
                style: style_Formacinvegetal_7,
                popuplayertitle: 'Formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/Formacinvegetal_7.png" /> Formación vegetal'
            });
var format_Formacinvegetal_8 = new ol.format.GeoJSON();
var features_Formacinvegetal_8 = format_Formacinvegetal_8.readFeatures(json_Formacinvegetal_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formacinvegetal_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formacinvegetal_8.addFeatures(features_Formacinvegetal_8);
var lyr_Formacinvegetal_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formacinvegetal_8, 
                style: style_Formacinvegetal_8,
                popuplayertitle: 'Formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/Formacinvegetal_8.png" /> Formación vegetal'
            });
var format_Formacinvegetal_9 = new ol.format.GeoJSON();
var features_Formacinvegetal_9 = format_Formacinvegetal_9.readFeatures(json_Formacinvegetal_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formacinvegetal_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formacinvegetal_9.addFeatures(features_Formacinvegetal_9);
var lyr_Formacinvegetal_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formacinvegetal_9, 
                style: style_Formacinvegetal_9,
                popuplayertitle: 'Formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/Formacinvegetal_9.png" /> Formación vegetal'
            });
var format_Formacinvegetal_10 = new ol.format.GeoJSON();
var features_Formacinvegetal_10 = format_Formacinvegetal_10.readFeatures(json_Formacinvegetal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formacinvegetal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formacinvegetal_10.addFeatures(features_Formacinvegetal_10);
var lyr_Formacinvegetal_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formacinvegetal_10, 
                style: style_Formacinvegetal_10,
                popuplayertitle: 'Formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/Formacinvegetal_10.png" /> Formación vegetal'
            });
var format_Formacinvegetal_11 = new ol.format.GeoJSON();
var features_Formacinvegetal_11 = format_Formacinvegetal_11.readFeatures(json_Formacinvegetal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formacinvegetal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formacinvegetal_11.addFeatures(features_Formacinvegetal_11);
var lyr_Formacinvegetal_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formacinvegetal_11, 
                style: style_Formacinvegetal_11,
                popuplayertitle: 'Formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/Formacinvegetal_11.png" /> Formación vegetal'
            });
var format_Formacinvegetal_12 = new ol.format.GeoJSON();
var features_Formacinvegetal_12 = format_Formacinvegetal_12.readFeatures(json_Formacinvegetal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formacinvegetal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formacinvegetal_12.addFeatures(features_Formacinvegetal_12);
var lyr_Formacinvegetal_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formacinvegetal_12, 
                style: style_Formacinvegetal_12,
                popuplayertitle: 'Formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/Formacinvegetal_12.png" /> Formación vegetal'
            });
var format_Formacinvegetal_13 = new ol.format.GeoJSON();
var features_Formacinvegetal_13 = format_Formacinvegetal_13.readFeatures(json_Formacinvegetal_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formacinvegetal_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formacinvegetal_13.addFeatures(features_Formacinvegetal_13);
var lyr_Formacinvegetal_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formacinvegetal_13, 
                style: style_Formacinvegetal_13,
                popuplayertitle: 'Formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/Formacinvegetal_13.png" /> Formación vegetal'
            });
var format_Comuna_14 = new ol.format.GeoJSON();
var features_Comuna_14 = format_Comuna_14.readFeatures(json_Comuna_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuna_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comuna_14.addFeatures(features_Comuna_14);
var lyr_Comuna_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comuna_14, 
                style: style_Comuna_14,
                popuplayertitle: 'Comuna',
                interactive: true,
                title: '<img src="styles/legend/Comuna_14.png" /> Comuna'
            });
var format_Regin_15 = new ol.format.GeoJSON();
var features_Regin_15 = format_Regin_15.readFeatures(json_Regin_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regin_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regin_15.addFeatures(features_Regin_15);
var lyr_Regin_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regin_15, 
                style: style_Regin_15,
                popuplayertitle: 'Región',
                interactive: true,
                title: '<img src="styles/legend/Regin_15.png" /> Región'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_Provincia_1.setVisible(true);lyr_Formacinvegetal_2.setVisible(true);lyr_Formacinvegetal_3.setVisible(true);lyr_Formacinvegetal_4.setVisible(true);lyr_Formacinvegetal_5.setVisible(true);lyr_Formacinvegetal_6.setVisible(true);lyr_Formacinvegetal_7.setVisible(true);lyr_Formacinvegetal_8.setVisible(true);lyr_Formacinvegetal_9.setVisible(true);lyr_Formacinvegetal_10.setVisible(true);lyr_Formacinvegetal_11.setVisible(true);lyr_Formacinvegetal_12.setVisible(true);lyr_Formacinvegetal_13.setVisible(true);lyr_Comuna_14.setVisible(true);lyr_Regin_15.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_Provincia_1,lyr_Formacinvegetal_2,lyr_Formacinvegetal_3,lyr_Formacinvegetal_4,lyr_Formacinvegetal_5,lyr_Formacinvegetal_6,lyr_Formacinvegetal_7,lyr_Formacinvegetal_8,lyr_Formacinvegetal_9,lyr_Formacinvegetal_10,lyr_Formacinvegetal_11,lyr_Formacinvegetal_12,lyr_Formacinvegetal_13,lyr_Comuna_14,lyr_Regin_15];
lyr_Provincia_1.set('fieldAliases', {'PROVINCIA': 'PROVINCIA', });
lyr_Formacinvegetal_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Formacinvegetal_3.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Formacinvegetal_4.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Formacinvegetal_5.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Formacinvegetal_6.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Formacinvegetal_7.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Formacinvegetal_8.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Formacinvegetal_9.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Formacinvegetal_10.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Formacinvegetal_11.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Formacinvegetal_12.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Formacinvegetal_13.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Comuna_14.set('fieldAliases', {'COMUNA': 'COMUNA', });
lyr_Regin_15.set('fieldAliases', {'Región': 'Región', });
lyr_Provincia_1.set('fieldImages', {'PROVINCIA': '', });
lyr_Formacinvegetal_2.set('fieldImages', {'NOMBRE': '', 'FORMACION': '', });
lyr_Formacinvegetal_3.set('fieldImages', {'NOMBRE': '', 'FORMACION': '', });
lyr_Formacinvegetal_4.set('fieldImages', {'NOMBRE': '', 'FORMACION': '', });
lyr_Formacinvegetal_5.set('fieldImages', {'NOMBRE': '', 'FORMACION': '', });
lyr_Formacinvegetal_6.set('fieldImages', {'NOMBRE': '', 'FORMACION': '', });
lyr_Formacinvegetal_7.set('fieldImages', {'NOMBRE': '', 'FORMACION': '', });
lyr_Formacinvegetal_8.set('fieldImages', {'NOMBRE': '', 'FORMACION': '', });
lyr_Formacinvegetal_9.set('fieldImages', {'NOMBRE': '', 'FORMACION': '', });
lyr_Formacinvegetal_10.set('fieldImages', {'NOMBRE': '', 'FORMACION': '', });
lyr_Formacinvegetal_11.set('fieldImages', {'NOMBRE': '', 'FORMACION': '', });
lyr_Formacinvegetal_12.set('fieldImages', {'NOMBRE': '', 'FORMACION': '', });
lyr_Formacinvegetal_13.set('fieldImages', {'NOMBRE': '', 'FORMACION': '', });
lyr_Comuna_14.set('fieldImages', {'COMUNA': '', });
lyr_Regin_15.set('fieldImages', {'Región': '', });
lyr_Provincia_1.set('fieldLabels', {'PROVINCIA': 'no label', });
lyr_Formacinvegetal_2.set('fieldLabels', {'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_Formacinvegetal_3.set('fieldLabels', {'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_Formacinvegetal_4.set('fieldLabels', {'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_Formacinvegetal_5.set('fieldLabels', {'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_Formacinvegetal_6.set('fieldLabels', {'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_Formacinvegetal_7.set('fieldLabels', {'NOMBRE': 'no label', 'FORMACION': 'inline label - always visible', });
lyr_Formacinvegetal_8.set('fieldLabels', {'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_Formacinvegetal_9.set('fieldLabels', {'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_Formacinvegetal_10.set('fieldLabels', {'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_Formacinvegetal_11.set('fieldLabels', {'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_Formacinvegetal_12.set('fieldLabels', {'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_Formacinvegetal_13.set('fieldLabels', {'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_Comuna_14.set('fieldLabels', {'COMUNA': 'no label', });
lyr_Regin_15.set('fieldLabels', {'Región': 'no label', });
lyr_Regin_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});