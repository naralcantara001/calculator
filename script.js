// calculator
const calInput = document.querySelector('.calInput');

function digits(digits){
    calInput.value += digits;
}

function equals(){
    try
    {
        calInput.value = eval(calInput.value);
    }
    catch(err)
    {
        alert('Invalid');
        calInput.value = "";
    }
}
function Clear(){
    calInput.value = "";
}

