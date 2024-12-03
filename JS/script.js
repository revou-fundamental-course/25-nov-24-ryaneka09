
// create a function for BMI calculator
let calculatorBmi = function (weight, height) {

    // create BMI formula
    let bmi = Math.round(weight / Math.pow((height/100), 2));

    // make else if statement for the ouput conditions
    if (bmi < 18.5) {
        message = "kekurangan berat badan.";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "Normal (ideal)";
    }
    else if (bmi >= 25.0 && bmi <= 29.9) {
        message = "kelebihan berat badan";
    }
    else if (bmi > 30.0) {
        message = "Kegemukan (Obesitas)";
    }
    else {
        message = "Kamu belum mengisi angka pada inputan";
    }

    // return an object using both values
    return {bmi: bmi, message: message};
}


// Add even listener to form
document.getElementById("bmiform").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting

    // get the values of the input fields
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    // Call the BMI calculator function
    const {bmi, message} = calculatorBmi(weight, height);

    // Display the result (values)
    document.getElementById("bmi").innerHTML = bmi;
    document.getElementById("result").innerHTML = message;

    // Get element for styles
    const bmiElement = document.getElementById ("bmi");
    const resultElement = document.getElementById ("result");

    // change status text color
    if (bmi < 18.5) {
        bmiElement.style.color = "red";
        resultElement.style.color = "red";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiElement.style.color = "green";
        resultElement.style.color = "green";
    }
    else if (bmi >= 25.0 && bmi <= 29.9) {
        bmiElement.style.color = "red";
        resultElement.style.color = "red";
    }
    else {
        bmiElement.style.color = "darkred";
        resultElement.style.color = "darkred";
    }

    // Add event listener for reset button
    document.getElementById("bmiform").addEventListener("reset", function () {
        // Clear input fields
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";

        // reset displayed results
        document.getElementById("bmi").innerHTML = "0";
        document.getElementById("result").innerHTML = "Status Berat badan";

        // Reset styles
        const bmiElement = document.getElementById("bmi");
        const resultElement = document.getElementById("result");
        bmiElement.style.color = "";
        resultElement.style.color = "";
    });
});