document.getElementById('log-out').addEventListener('click',function(){

    const acountNumber = document.getElementById('acount-number').value;

    const logOutPin = document.getElementById('pin').value;
    const convertLogOutPin = parseInt(logOutPin)

    if(acountNumber.length === 11){
        if(convertLogOutPin === 1234){
            window.location.href = "./index.html";
        }
        else{
            alert('Invalid pin');
        }
    }
    else{
        alert('Invalid Phone Number');
    }
})