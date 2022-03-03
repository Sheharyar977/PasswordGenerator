console.clear();

let showResult = document.getElementById('showResult');
let upperCased = document.getElementById('uppercase').checked;
let lowerCased = document.getElementById('lowercase').checked;
let numbers = document.getElementById('number').checked;
let symbols = document.getElementById('symbol').checked;
let sliderValue = document.getElementById('slider').value;


function myFunction() { 
    //randomNumbers();
    randomLowercase(); 
    //randomUppercase(); 
   //randomSymbols(); 
}
let generatePassword = (sliderValue,includeUppercase, includeNumbers,includeSymbols) => {
    let charCodes = LOWERCASE_CODES;
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
      const characterCode =
        charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join("");
  };
/*
//let showResult=document.getElementById('showResult').innerHTML;
console.log(showResult);

function randomLowercase() { 
    let sliderValue = document.getElementById('slider').value;
    //console.log(sliderValue); 

    let letters = "abcdefghijklmnopqrstuvwxyz";

    let password = "";
    for (var i=0; i < sliderValue; i++) { 
        let generate = letters[Math.floor(Math.random()*26)]; 
        //console.log(generate);
        password += generate;
        //console.log(password); 
    }
    showResult.innerHTML=password;
}

function randomUppercase() { 
    let sliderValue = document.getElementById('slider').value;
    console.log(sliderValue); 

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let password = "";
    for (var i=0; i < sliderValue; i++) { 
        let generate = letters[Math.floor(Math.random()*letters.length)]; 
        console.log(generate);
        password += generate;
        console.log(password); 
    }
    
}


function randomNumbers() { 
    let numbers = "1234567890";
    let sliderValue = document.getElementById('slider').value;

    let password = "";
    for (var i=0; i < sliderValue; i++) { 
        let generate = numbers[Math.floor(Math.random()*numbers.length)]; 
        console.log(generate);
        password += generate;
        console.log(password); 
    }
}

function randomSymbols() { 
    let symbols = "~`!@#$%^&*()_-+={[}]|':<>?/";
    let sliderValue = document.getElementById('slider').value;

    let password = "";
    for (var i=0; i < sliderValue; i++) { 
        let generate = symbols[Math.floor(Math.random()*symbols.length)]; 
        console.log(generate);
        password += generate;
        console.log(password); 
    }
}

/*
function generatePassword(length, lower, upper, number, symbol) {
	let generatedPassword = "";
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
	if (typesCount === 0) {
		return "";
	}
	for (let i = 0; i < length; i++) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	return generatedPassword.slice(0, length)
		.split('').sort(() => Math.random() - 0.5)
		.join('');
}
*/
