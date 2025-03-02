


document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();

    

    const acountNumber = document.getElementById('acount-number').value;
    
    const amount = getInputValueById('Amount');

    const pin = getInputValueById('pin');

    const displayMoney = getInnerTextById('display-money');

    const allbank = document.getElementById('allbank').value;

    if(amount < 0){
        alert('Invalid Amount')
    }

    if(acountNumber.length === 11){
        if(pin === 1234){
            const sum = amount + displayMoney;
            setInnerTextIdAndValue("display-money",sum)

            const container = document.getElementById('transection-container');

            const div = document.createElement("div");
            
            div.innerHTML = `
            <h1>Added Money Frome ${allbank} : ${amount} Taka</h1>
            <h1>Frome ${acountNumber}</h1>
            `
            container.appendChild(div);

        }
        else{
            alert('Ivalid Pin Number')
        }
    }
    else{
        alert('Ivalid Acount Number')
    }
});


//? Details code....


// document.getElementById('add-money-btn').addEventListener('click',function(event){
//     event.preventDefault();


//     const acountNumber = document.getElementById('acount-number').value;



//     const pin = document.getElementById('pin').value;
//     const convertPin = parseInt(pin);


//     const  amountMoney = document.getElementById('Amount').value;
//     const convertAmountMoney = parseFloat(amountMoney);

//     const displayMoney = document.getElementById('display-money').innerText;
//     const convertDisplayMoney = parseFloat(displayMoney);


//     if( convertAmountMoney < 0){
//         alert('Enter The Amount');
//         return;
//      }


//     if(acountNumber.length === 11){
//         if(convertPin === 1234){
//             const sum = convertAmountMoney + convertDisplayMoney;
//             document.getElementById('display-money').innerText = sum;
//         }
//         else{
//             alert('Invalid Pin Number');
//         }
//     }
//     else{
//         alert('Invalid Phone Number');
//     }

// })