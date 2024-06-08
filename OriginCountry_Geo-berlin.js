var geojsonData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "country": "USA",
                "tourists": 50000,
                "stay_duration": 7 // days
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-95.7129, 37.0902],  // USA (Zentrum)
                    [13.4050, 52.5200]    // Berlin
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "country": "France",
                "tourists": 30000,
                "stay_duration": 5 // days
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [2.2137, 46.2276],   // France (Zentrum)
                    [13.4050, 52.5200]   // Berlin
                ]
            }
        }
        // Weitere Pfade hier hinzufügen
    ]
};