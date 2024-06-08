var geojsonData = {
    "type": "FeatureCollection",
    "features": [

        {
            "type": "Feature",
            "properties": {
                "country": "France",
                "tourists": 140580,
                "stay_duration": 5 
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [2.2137, 46.2276],   // France (Zentrum)
                    [13.4050, 52.5200]   // Berlin
                ]
            }
        },
        
        {
            "type": "Feature",
            "properties": {
                "country": "austria",
                "tourists": 1406219,
                "stay_duration": 5 // days
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [47.697543, 13.349319],  
                    [13.4050, 52.5200]   // Berlin
                ]
            }
        },
    ]
};