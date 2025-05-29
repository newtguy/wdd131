document.getElementById("weatherEmoji").textContent = "Weather";
const temp = document.getElementById("temp").textContent;
const windSpeed = document.getElementById("wind").textContent;
const floatTemp = parseFloat(temp);
const floatWindSpeed = parseFloat(windSpeed);

if (shouldCalculateWindChill(floatTemp, floatWindSpeed)) {
    const windChill = calculateWindChill(floatTemp, floatWindSpeed);
    let roundedWindChill = windChill.toFixed(1);
    document.getElementById("windChill").textContent = roundedWindChill;
}

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

function shouldCalculateWindChill(temperature, windSpeed) {
    return temperature <= 10 && windSpeed > 4.8;
}

