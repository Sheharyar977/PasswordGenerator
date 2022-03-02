console.clear();

function myFunction() { 
    randomLetters();
}

function randomLetters() { 
    let sliderValue = document.getElementById('slider').value;
    console.log(sliderValue); 

    let letters = "abcdefghijklmnopqrstuvwxyz";

    let password = "";
    for (var i=0; i < sliderValue; i++) { 
        let generate = letters[Math.floor(Math.random()*26)]; 
        console.log(generate);
        password += generate;
        console.log(password); 
    }
    
}
/*
function randomNumbers() { 
    let numbers = "1234567890";

    let password = "";


//we want i < slider length later
    for (var i=0; i < 20; i++) { 
        let generate = numbers[Math.floor(Math.random()*10)]; 
        console.log(generate);
        password += generate;
        console.log(password); 
    }
}
*/