document.getElementById('transfer-btn').addEventListener('click',function(event){
    event.preventDefault();
    

    const transferNumber = document.getElementById('transfer-number').value;


    const convertDisplayMoney  = getInnerTextById('display-money');



    const transferPin = getInputValueById('transfer-pin');
    

    const transferMoney = getInputValueById('transfer-money');

    const allbankCashout = document.getElementById('allbank-transfer').value;

    if(transferMoney > convertDisplayMoney){
        alert('Enter The Transfer Amount');
        return;
    }



    if(transferNumber.length === 11){
        if(transferPin === 1234){
            const sum = convertDisplayMoney - transferMoney;
            setInnerTextIdAndValue("display-money",sum)

            const container = document.getElementById('transection-container');

            const div = document.createElement("div");
            
            div.innerHTML = `
            <h1>Transfer Money Frome ${allbankCashout} : ${transferMoney} Taka</h1>
            <h1>Frome ${transferNumber}</h1>
            `
            container.appendChild(div);
        }
        else{
            alert('Invalid Pin Number');
        }
    }
    else{
        alert('Invalid Transfer Number');
    }
})