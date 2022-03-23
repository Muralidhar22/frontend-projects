const bill = document.querySelector(".bill")
const reset = document.querySelector(".reset-button")
const zeroBillError = document.querySelector(".bill-span")
const zeroPeopleError = document.querySelector(".people-span")
const inputField = document.querySelectorAll("input[type='text']")
const people = document.querySelector('.people')
const customTipPercent = document.querySelector(".custom-percent")
const tipAmountPerPerson = document.querySelector(".tip-amount-number")
const totalAmountPerPerson = document.querySelector(".total-number")

let tipPercent, billValue ,noOfPerson, customPercent  
let tipContainer = document.querySelectorAll(".button-percent-formatter")

//bill
bill.addEventListener('input',() =>{
    reset.classList.add("reset-btn-mute")
    billValue = parseFloat(bill.value)
    tipCalculator()
    if(billValue === 0.00){
        errorAdd(zeroBillError)
    }
})

// tip percentage button active
tipContainer.forEach(item =>{
    item.addEventListener('click', () => {
        tipPercent = item.value
        //adding button active to only the clicked button
         tipContainer.forEach(button =>{
             if(button.value === tipPercent){
                    button.classList.add("button-active");
                    if(people.value !== 0 && people.value !== ''){
                    tipCalculator()
                }
             }
             else{
                 button.classList.remove("button-active");
             }
         })
    })
})

//tip custom percent
customTipPercent.addEventListener('input',()=>{
    if(customTipPercent === document.activeElement){
        btnInactive()
        customPercent = parseInt(customTipPercent.value)
        if(customPercent !== '' && customPercent !== 0){
            tipPercent = 0
            tipCalculator()
        } 
    }
})

// no of person
people.addEventListener('input',() =>{
    noOfPerson = parseInt(people.value)
    if(peopleValidator()) { 
        if(noOfPerson === 0){
            errorAdd(zeroPeopleError)
        }
         return
    }
    else if(tipPercent){
            tipCalculator()
       }
    else{
            if(isNaN(customPercent) || customPercent === '') return
            else tipCalculator()  
        }   
})
//TIP CALCULATION FUNCTION
function tipCalculator(){  
         if(peopleValidator()) return
         else{
            errorRemove(zeroBillError,zeroPeopleError)
            if(tipPercent === 0) percentCalculator(customPercent)
            else percentCalculator(tipPercent) 
        }  
}
function percentCalculator(percent){
    let sum, tipPerPerson, totalPerPerson
    sum = (billValue + (billValue*(percent/100)) )
    totalPerPerson = (sum/noOfPerson).toFixed(2)
    tipPerPerson = ((billValue*(percent/100))/noOfPerson).toFixed(2);
    tipAmountPerPerson.textContent = `$${tipPerPerson}`
    totalAmountPerPerson.textContent = `$${totalPerPerson}`
}
// reset button handler
reset.addEventListener('click',()=>{
    reset.classList.remove("reset-btn-mute")
    //making tip percentage button inactive
    btnInactive()
    errorRemove(zeroBillError,zeroPeopleError)
    inputField.forEach((element)=>{
        element.value = ''
    })
    makeZero()
})
//makeZero function
const makeZero = () =>{
    tipAmountPerPerson.textContent = totalAmountPerPerson.textContent = `$0.00`
    tipPercent = billValue = noOfPerson = customPercent = 0
}
//make button inactive
const btnInactive = () => {
    tipContainer.forEach(item =>{
        item.classList.remove("button-active")
    })
}
// error add and remove functions
const errorAdd = (...element) =>{  
    element.forEach(item =>{
        item.classList.add("label-span-active")
    })
    
}
const errorRemove = (...element) => {
    element.forEach(item =>{
        item.classList.remove("label-span-active")
    })
}
const peopleValidator = () =>{
    if(noOfPerson === '' || noOfPerson === 0 || isNaN(noOfPerson)) return true
    else return false
}