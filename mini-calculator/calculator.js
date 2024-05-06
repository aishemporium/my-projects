const firstNum = document.getElementById('firstNum');
const secondNum = document.getElementById('secondNum');
const result = document.getElementById('result');

const additionBtn = document.getElementById('addition');
const subtractionBtn = document.getElementById('subtraction');
const multipicationBtn = document.getElementById('multiplication');
const divisionBtn = document.getElementById('division');

additionBtn.addEventListener('click', () => {result.value = Number(firstNum.value) + Number(secondNum.value)});
subtractionBtn.addEventListener('click', () => {result.value = Number(firstNum.value) - Number(secondNum.value)});
multipicationBtn.addEventListener('click', () => {result.value = Number(firstNum.value) * Number(secondNum.value)});
divisionBtn.addEventListener('click', () => {result.value = Number(firstNum.value) / Number(secondNum.value)});
