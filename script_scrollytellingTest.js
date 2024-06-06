document.addEventListener('scroll', function () {
    // Höhe des gesamten Dokuments
    let documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    // Aktuelle Scrollposition
    let scrollPosition = window.scrollY;
    // Prozentuales Scrollen
    let scrollPercent = scrollPosition / documentHeight;

    // Berechne die neue Hintergrundfarbe
    let darkness = Math.min(scrollPercent * 100, 100); // Begrenze den Wert auf 100
    let backgroundColor = `rgb(${255 - darkness * 2.55}, ${255 - darkness * 2.55}, ${255 - darkness * 2.55})`;

    // Setze die Hintergrundfarbe
    document.body.style.backgroundColor = backgroundColor;

    // Breite des Fensters
    let windowWidth = window.innerWidth;
    // Neue Position des Quadrats
    let newPosition = scrollPercent * (windowWidth - 50); // Subtrahiere die Breite des Quadrats

    // Setze die neue Position
    document.getElementById('square').style.left = `${newPosition}px`;

    let rectangle = document.getElementById('rectangle');

    if (scrollPercent < 0.3) {
        rectangle.style.position = 'absolute';
        rectangle.style.top = `${scrollPosition}px`;
        rectangle.style.opacity = 1;
    } else if (scrollPercent >= 0.3 && scrollPercent <= 0.6) {
        rectangle.style.position = 'fixed';
        rectangle.style.top = '30%';
        rectangle.style.opacity = 1;
    } else {
        rectangle.style.position = 'absolute';
        rectangle.style.top = `${scrollPosition}px`;
        rectangle.style.opacity = 1;
    }
});
