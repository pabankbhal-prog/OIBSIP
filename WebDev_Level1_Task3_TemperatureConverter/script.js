const temperature = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const resultText = document.getElementById("resultText");

document.getElementById("convertBtn").addEventListener("click", convertTemperature);
document.getElementById("resetBtn").addEventListener("click", resetFields);

function convertTemperature() {

    let temp = parseFloat(temperature.value);

    if (isNaN(temp)) {
        resultText.innerHTML = "⚠️ Please enter a valid temperature.";
        return;
    }

    let from = fromUnit.value;
    let to = toUnit.value;

    // Absolute zero validation
    if ((from === "C" && temp < -273.15) ||
        (from === "F" && temp < -459.67) ||
        (from === "K" && temp < 0)) {

        resultText.innerHTML = "❌ Temperature cannot be below absolute zero.";
        return;
    }

    let celsius;

    // Convert input to Celsius first
    switch (from) {

        case "C":
            celsius = temp;
            break;

        case "F":
            celsius = (temp - 32) * 5 / 9;
            break;

        case "K":
            celsius = temp - 273.15;
            break;
    }

    let result;

    // Convert Celsius to target unit
    switch (to) {

        case "C":
            result = celsius;
            break;

        case "F":
            result = (celsius * 9 / 5) + 32;
            break;

        case "K":
            result = celsius + 273.15;
            break;
    }

    resultText.innerHTML =
        `${temp} °${from} = <strong>${result.toFixed(2)} °${to}</strong>`;
}

function resetFields() {

    temperature.value = "";

    fromUnit.value = "C";

    toUnit.value = "F";

    resultText.innerHTML = "Your converted temperature will appear here.";
}