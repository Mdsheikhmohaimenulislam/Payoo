document.getElementById('Get-onus-btn').addEventListener('click',function(event){
event.preventDefault();

const acountNumber = document.getElementById('acount-number').value;

const Bonus = document.getElementById('Bonus').value;
const convertBonus = parseFloat(Bonus);

const bonusPin = document.getElementById('bonus-pin').value;
const convertbonusPin = parseInt(bonusPin);

const displayMoney = document.getElementById('display-money').innerText;
const convertDisplayMoney = parseFloat(displayMoney);

if(acountNumber.length === 11){
     if(convertbonusPin === 1234){
        if(convertBonus === 20){
            alert("Successfull Add Bonus")
            const sum = convertBonus + convertDisplayMoney;
            document.getElementById('display-money').innerText = sum;
        }
        else{
            alert('Invalid Bonus');
        }
     }
     else{
        alert('Invalid Pin Number');
     }
}
else{
    alert('Invalid Acount Number');
}
})