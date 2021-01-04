const dob = document.querySelector("#inp-dob");
const luckyNum = document.querySelector("#inp-luckynum");
const btnCheck = document.querySelector("#btn-check");


function clickHandler(){
    let dobVal = dob.value;
    dobVal = parseInt(dobVal.split('-').join(''), 10);
    const luckyNumVal = parseInt(luckyNum.value);

    let sum = 0;

    while(dobVal > 0){
        console.log("Dob value: "+ dobVal)
        let rem = dobVal % 10;
        console.log("rem: " + rem);
        sum += rem;
        console.log("sum: " + sum);
        dobVal = Math.floor(dobVal / 10);
    }
    
    if(sum % luckyNumVal === 0){
        console.log("Yayy your birthday is lucky!");
    }else{
        console.log("Your birthday is not lucky");
    }
}

btnCheck.addEventListener("click", clickHandler);
