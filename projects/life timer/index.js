let isDOBOpen = false;
let dateOfBirth;
const settingCogEl = document.getElementById('settingIcon');
const settingContentEl = document.getElementById('settingContent');
const settingInp = document.getElementById('dobInput');
const ageButton = document.getElementById('dobButton');
const firstTxt = document.getElementById('initialTxt');
const secondTxt = document.getElementById('afterTxt');
const dobButtonEl = document.getElementById('dobButton');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minEl = document.getElementById('min');
const secEl = document.getElementById('second');


const dateSelector = () => {
    if (isDOBOpen) {
        settingContentEl.classList.add('hide');
    } else {
        settingContentEl.classList.remove('hide');
    }
    isDOBOpen = !isDOBOpen;
    console.log("toggle", isDOBOpen);
};

const makeTwoDigit = (number) => {
    return number > 9 ? number : `0${number}`;
}


const updateAge = () => {
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12;
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    const min = Math.floor(dateDiff / (1000 * 60)) % 60;
    const second = Math.floor(dateDiff / 1000) % 60;


    yearEl.innerHTML = makeTwoDigit(year);
    monthEl.innerHTML = makeTwoDigit(month);
    dayEl.innerHTML = makeTwoDigit(day);
    hourEl.innerHTML = makeTwoDigit(hour);
    minEl.innerHTML = makeTwoDigit(min);
    secEl.innerHTML = makeTwoDigit(second);
}

const localStorageGetter = () =>{
    const year = localStorage.setItem('year');
    const month = localStorage.setItem('month');
    const date = localStorage.setItem('date');
    if(year && month && date ){
        dateOfBirth = new Date (year, month , date)
    }
    updateAge()
}

const setDOBHandler = () => {
    const dateString = settingInp.value;
    dateOfBirth = dateString ? new Date(dateString) : null;
   
    if (dateOfBirth) {
        localStorage.setItem('year' , dateOfBirth.getFullYear());
        localStorage.setItem('month' , dateOfBirth.getMonth());
        localStorage.setItem('date' , dateOfBirth.getDate());
        firstTxt.classList.add('hide');
        secondTxt.classList.remove('hide');

        setInterval(() => updateAge(), 1000);
    } else {
        firstTxt.classList.remove('hide');
        secondTxt.classList.add('hide');
    }

}

setDOBHandler();






settingCogEl.addEventListener('click', dateSelector);
dobButton.addEventListener('click', setDOBHandler);