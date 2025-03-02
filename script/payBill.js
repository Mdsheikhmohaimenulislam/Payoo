document.getElementById('bill-btn').addEventListener('click',function(event){
    event.preventDefault();
    

    const billNumber = document.getElementById('bill-number').value;



    const amountBill = document.getElementById('amount-bill').value;
    const convertAmountAmount = parseFloat(amountBill);

    const billPin = document.getElementById('bill-pin').value;
    const convertBillPin = parseInt(billPin);

    const displayMoney = document.getElementById('display-money').innerText;
    const convertDisplayMoney = parseFloat(displayMoney);

    const allBill = document.getElementById('all-bill').value;

    if(convertAmountAmount > convertDisplayMoney ){
        alert('Enter The Amount');
        return;
    }

    if(billNumber.length === 12){
        if(convertBillPin === 1234){
            const sum = convertDisplayMoney - convertAmountAmount ;
            document.getElementById('display-money').innerText = sum;

            const container = document.getElementById('transection-container');

            const div = document.createElement('div');

            div.innerHTML = `
            <h1>Month Pay Bill ${allBill} : ${convertAmountAmount} Taka</h1>
            <h1>Frome ${billNumber}</h1>
            `
            container.appendChild(div);
        }
        else{
            console.log('pin not');
        }
    }
    else{
        console.log('no');
    }
    
})