document.getElementById('withdrow-btn').addEventListener('click',function(event){
    event.preventDefault();
    

    const agentNumber = document.getElementById('agent-number').value;


    // const displayMoney = document.getElementById('display-money').innerText;
    // const convertDisplayMoney = parseFloat(displayMoney);
    const convertDisplayMoney  = getInnerTextById('display-money');


    // const cashOutPin = document.getElementById('cash-out-pin').value;
    // const convertCashOutPin = parseInt(cashOutPin);
    const convertCashOutPin = getInputValueById('cash-out-pin');
    

    // const withdrow = document.getElementById('withdrow').value;
    // const convertWithdrow = parseFloat(withdrow);
    const convertWithdrow = getInputValueById('withdrow');

    const allbankCashout = document.getElementById('allbank-Cashout').value;

    if(convertWithdrow > convertDisplayMoney){
        alert('Enter The Amount');
        return;
    }



    if(agentNumber.length === 11){
        if(convertCashOutPin === 1234){
            const sum = convertDisplayMoney - convertWithdrow;
            setInnerTextIdAndValue("display-money",sum)

            const container = document.getElementById('transection-container');

            const div = document.createElement("div");
            
            div.innerHTML = `
            <h1>Cashout Money Frome ${allbankCashout} : ${convertWithdrow } Taka</h1>
            <h1>Frome ${agentNumber}</h1>
            `
            container.appendChild(div);
        }
        else{
            alert('Invalid Pin Number');
        }
    }
    else{
        alert('Invalid Agent Number');
    }
})