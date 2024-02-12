const calculateFormEl = document.getElementById('formSbmit');


const claculateMarks = (event) =>{
    const maxMarks = 400;
    event.preventDefault();


    const formData = new FormData(calculateFormEl);
    const data = {};

    formData.forEach((value , key) =>{
        data[key] = +value;
    });

    const totalMarks = data.math + data.physics + data.english + data.urdu;
    const percentage = (totalMarks / maxMarks) * 100 ;
    const resultEl = document.createElement("p");
    resultEl.className = "result";
    resultEl.innerText = `You Got ${totalMarks} Out of ${maxMarks} Your percentage is ${percentage}` ;
    calculateFormEl.after(resultEl);
}