//cuenta
let bill = document.querySelector('.inputs-section__bill-input');
let billNumber = parseInt(bill.value);

//#personsas
let people = document.querySelector('.inputs-section__people-input');
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector('.results__tip-value');
let totalResult = document.querySelector('.results__total-value');

let buttons = document.querySelectorAll('.btns__button');
let tipValue = 10;

alert = document.querySelector('#alert');

buttons.forEach(element=> {
    element.addEventListener('click',event=>{
        removeActive();
        element.classList.add('btns__button--selected')

        //sacando porcentaje de los botones y cambiar valor numerico
        tipValue = parseInt(event.target.innerText.slice(0,-1));

        calculateTip();
        
    });
});

//Actualizar bill
bill.addEventListener('input',()=>{
   
    billNumber = parseFloat(bill.value);

    //calcular propina
    calculateTip();
});

//actulizar bnt custom
let custom = document.querySelector('.btns__custom');
custom.addEventListener('click',()=>{
    removeActive();
});
custom.addEventListener('input',()=>{
   
    removeActive();
    tipValue= parseInt(custom.value);
    if (isNaN(peopleNumber)){

    } else {

        //calcular propina
        calculateTip();
    }
});

//Reset
let resetBtn = document.querySelector('.results-section_reset');
resetBtn.addEventListener('click', ()=>{
    bill.value = 0;
    billNumber = 0;
    people.value = 1;
    peopleNumber = 1;
    custom.value = 'Custom';
    calculateTip();
});
//Actualizar personas
people.addEventListener('input',()=>{
    peopleNumber = parseInt(people.value);

    if(peopleNumber == 0 || isNaN(peopleNumber)) {
        people.style.borderColor='rgb(164, 68, 68)';
        alert.classList.add('error');
    } else{
        alert.classList.remove('error');
        people.style.borderColor='hsl(189, 41%, 97%)';
        calculateTip();
    }
    
    
})

//Funciones
function calculateTip(){
    //calculo Tip Amount
    let tipAmount =((billNumber*tipValue)/100)
    tipResult.innerText=(tipAmount /peopleNumber).toFixed(2);
    
    //calculo total
    totalResult.innerHTML = ((tipAmount+billNumber)/peopleNumber).toFixed(2);
}
function removeActive(){
            // cambiar clase active
            buttons.forEach(element =>{
                element.classList.remove('btns__button--selected');
            });
}