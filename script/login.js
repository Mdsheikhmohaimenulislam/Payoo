document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    
    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin)

    
    if(phoneNumber.length === 11){
        if(convertPin === 1234){
            window.location.href = "./main.html";
        }
        else{
            alert('Invalid pin');
        }
    }
    else{
        alert('Invalid Phone Number');
    }

});