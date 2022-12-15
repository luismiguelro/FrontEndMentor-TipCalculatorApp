//cuenta
let bill = document.querySelector('.inputs-section__bill-input');
let billNumber = parseInt(bill.value);

//#personsas
let people = document.querySelector('.inputs-section__people-input');
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector('.results__tip-value');
let totalResult = document.querySelector('.results__total-value');

let buttons = document.querySelectorAll('.btns__button');

buttons.forEach(element=> {
    element.addEventListener('click',event=>{
        //sacando porcentaje de los botones y cambiar valor numerico
        let tipValue = parseInt(event.target.innerText.slice(0,-1));

        //calculo Tip Amount
        let tipAmount =((billNumber*tipValue)/100)
        tipResult.innerText=(tipAmount /peopleNumber);
        
        //calculo total
        totalResult.innerHTML = (tipAmount+billNumber)/peopleNumber
    });
});
