document.addEventListener("DOMContentLoaded", () => {
    const svgObject = document.getElementById("map");
    svgObject.addEventListener("load", () => {
        const svgDoc = svgObject.contentDocument;

        const data = [
            { id: 'line1', tourists: 100000, duration: 5 },
            { id: 'line2', tourists: 50000, duration: 7 },
            // Füge hier mehr Daten hinzu
        ];

        data.forEach(route => {
            const line = svgDoc.getElementById(route.id);
            const maxTourists = 100000; // Annahme für die maximale Anzahl Touristen
            const maxDuration = 10; // Annahme für die maximale Dauer
            const minStrokeWidth = 2;
            const maxStrokeWidth = 10;

            const strokeWidth = minStrokeWidth + (maxStrokeWidth - minStrokeWidth) * (route.tourists / maxTourists);
            const colorIntensity = Math.min(route.duration / maxDuration, 1);
            const color = `rgba(255, 87, 51, ${colorIntensity})`;  // Dynamische Farbe basierend auf Dauer

            line.setAttribute('stroke-width', strokeWidth);
            line.setAttribute('stroke', color);
        });
    });
});
