const generateBtn = document.getElementById('generateBtn')


const singelColorGenerator = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#"

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hex.length);
        hexColor += hex[random];
    }
    return hexColor;
}

const colorPalletGenerator =() =>{
    const colorPallet = [];
    for (let i=0; i< 4 ; i++) {
        colorPallet.push(singelColorGenerator());
    }
    return colorPallet;
}

const renderColor = () => {
    const colorContainer = document.querySelector(".colors_container");
    colorContainer.innerHTML = '';
    const colorPallet = colorPalletGenerator();
    colorPallet.forEach((color, i) => {
    const colorDiv = document.createElement("div");
    colorDiv.id = `color${i +1}`;
    colorDiv.style.backgroundColor = color;
    colorDiv.className = "colorBox"
    
    const colorTag = document.createElement('p');
    colorTag.id = `colorTag${i +1}`;
    colorTag.className = 'colorTag';
    colorTag.innerHTML = color;
    colorDiv.appendChild(colorTag);

    colorContainer.appendChild(colorDiv);
    });

    const copyToClipboard = (e) => {
        const text = e.target.innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert(`${text} copied to clipboard`);
        });
    };
    
    const colorTags = document.querySelectorAll('.colorTag');
    colorTags.forEach((colorTag, i) => {
        colorTag.addEventListener("click", copyToClipboard);
    });

    
};

generateBtn.addEventListener("click", renderColor);