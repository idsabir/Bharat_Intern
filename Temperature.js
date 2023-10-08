function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperatureInput").value);
    var unit = document.getElementById("unitSelect").value;
    var result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    if (unit === "celsius") {
        var fahrenheit = (temperature * 9 / 5) + 32;
        result.textContent = temperature + " Celsius is equal to " + fahrenheit.toFixed(2) + " Fahrenheit.";
    } else {
        var celsius = (temperature - 32) * 5 / 9;
        result.textContent = temperature + " Fahrenheit is equal to " + celsius.toFixed(2) + " Celsius.";
    }
}
