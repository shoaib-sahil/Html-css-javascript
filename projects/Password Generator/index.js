let passwordLength = 8;

let isUpperCase = false;
let isNumbers = false;
let isSymbols = false;

const passRangeInputEl  = document.getElementById('passRangeInput');
const passRangeValueEl  = document.getElementById('passRangeValue');
const genBtnEl = document.getElementById('genBtn');
const passwordEl = document.getElementById('password');

const generatePassword = (passLength) =>{
    const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetter =isUpperCase ?  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const numbers =isNumbers ?  "0123456789" : "";
    const symbols =isSymbols ? "~! @#$%^&()_-+=" : "";

    const passwordChar = lowerCaseLetter + upperCaseLetter + numbers + symbols;

    let password = "";

    for(let i = 0; i < passLength; i++){
        const charIndex = Math.floor(Math.random() * passwordChar.length);
        password += passwordChar[charIndex];
    }
    return password;
}

passRangeInputEl.addEventListener('input', (e) => {
    passwordLength = +e.target.value;
    passRangeValueEl.innerText = passwordLength;
});

genBtnEl.addEventListener('click', () => {
    const upperCaseCheckEl = document.getElementById('uppercase');
    const numbersCheckEl = document.getElementById('numbers');
    const symbolsCheckEl = document.getElementById('symbols');

    isUpperCase = upperCaseCheckEl.checked;
    isNumbers = numbersCheckEl.checked;
    isSymbols = symbolsCheckEl.checked;

    const password = generatePassword(passwordLength);
    passwordEl.innerHTML = password;
});
passwordEl.addEventListener("click", (e) =>{
    if(e.target.innerText.length> 0){
        navigator.clipboard.writeText(passwordEl.innerHTML).then(() =>{
            alert("password copied successfully")
        }).catch((err) =>(err.message = err.message));
    }
})