/* Forecast panel*/
const forecasts = document.querySelectorAll('.forecast__panel');
const onChange = e => {
    forecasts.forEach(forecast => {
        forecast.style.cssText = forecast.dataset.forecastType === e.target.dataset.forecast
            ? 'visibility: visible; opacity: 1; height: auto'
            : 'visibility: hidden; opacity: 0; height: 0'
    })
};

/* Search Panel */
const toogleSearch = () => document.querySelector('.widget__searching').classList.toggle('opened');

/* Slider panel */
const panels = document.querySelectorAll('.forecast__panel');

panels.forEach(panel => {
    const left = panel.querySelector('.js-forecast-button_left');
    const right = panel.querySelector('.js-forecast-button_right');
    const container = panel.querySelector('.forecast__body');

    left && left.addEventListener('click', (e) => {
        e.preventDefault();
        container.scrollLeft -= 124;
    });

    right && right.addEventListener('click', (e) => {
        e.preventDefault();
        container.scrollLeft += 124;
    });
})
