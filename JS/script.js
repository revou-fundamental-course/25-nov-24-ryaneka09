
// create a function for BMI calculator
let calculatorBmi = function (weight, height) {

    // create BMI formula
    let bmi = Math.round(weight / Math.pow((height/100), 2));

    // default message
    let message = "";
    let description = "";

    // make else if statement for the ouput conditions
    if (bmi < 18.5) {
        message = "kekurangan berat badan.";
        description = `
            <h4>Hasil BMI di Bawah 18.5</h4>
            <p>Anda masuk dalam kategori underweight atau berat badan kurang. Hal ini bisa menjadi indikasi bahwa tubuh Anda mungkin kekurangan nutrisi yang diperlukan untuk fungsi optimal.</p>
        `;
            
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "Normal (ideal)";
        description = `
            <h4>Hasil BMI diantara 18.5 dan 24.9</h4>
            <p>Anda masuk dalam kategori normal atau berat badan ideal. Ini menunjukkan bahwa berat badan Anda proporsional dengan tinggi badan, dan Anda memiliki risiko lebih rendah untuk mengalami masalah kesehatan yang terkait dengan berat badan, seperti obesitas atau kekurangan berat badan.</p>
        `;
        
    }
    else if (bmi >= 25.0 && bmi <= 29.9) {
        message = "kelebihan berat badan";
        description = `
            <h4>Hasil BMI di Antara 25.0 dan 29.9</h4>
            <p>Anda masuk dalam kategori overweight atau berat badan berlebih. Berat badan Anda berada di atas kisaran yang dianggap ideal untuk tinggi badan.</p>
        `;
    }
    else if (bmi > 30.0) {
        message = "Kegemukan (Obesitas)";
        description = `
            <h4>Hasil BMI di Atas 30</h4>
            <p>Anda berada dalam kategori obesitas, yang menandakan bahwa berat badan Anda berada jauh di atas kisaran ideal untuk tinggi badan. Obesitas dikaitkan dengan risiko tinggi untuk berbagai masalah kesehatan serius.</p>
        `;
    }
    else {
        message = "Kamu belum mengisi angka pada inputan";
    }

    // return an object using both values
    return {bmi: bmi, message: message, description: description};
}


// Add even listener to form
document.getElementById("calculateBtn").addEventListener("click", function() { // prevent the form from submitting

    // get the values of the input fields
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    // Check if input fields are filled
    if (!age || !weight || !height) {
        alert("Silahkan isi kolom yang tersedia.");
        return;
    }

    // Call the BMI calculator function
    const {bmi, message, description} = calculatorBmi(weight, height);

    // Display the result (values)
    document.getElementById("bmi").innerHTML = bmi;
    document.getElementById("result").innerHTML = message;
    document.getElementById("description").innerHTML = description;

    // Get element for styles
    const bmiElement = document.getElementById ("bmi");
    const resultElement = document.getElementById ("result");

    // change BMI values and status color
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
});


// Add event listener for reset button
document.getElementById("bmiform").addEventListener("reset", function () {
    // Clear input fields
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("description").value ="";

    // reset displayed results
    document.getElementById("bmi").innerHTML = "0";
    document.getElementById("result").innerHTML = "Status Berat badan";
    document.getElementById("description").innerHTML = `
        <h4>Hasil BMI</h4>
        <p>Deskripsi BMI</p>
    `;    

    // Reset styles
    const bmiElement = document.getElementById("bmi");
    const resultElement = document.getElementById("result");
    bmiElement.style.color = "";
    resultElement.style.color = "";
});
