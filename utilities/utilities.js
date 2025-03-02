function getInputValueById(id){
    const value = document.getElementById(id).value;
    const convertvalue = parseFloat(value);
   return  convertvalue;
};


//TODO,,,,      Any Name diye jabe ( getInnerTextById ) ..

function getInnerTextById(id){
    const displayMoney = document.getElementById(id).innerText;
    const convertDisplayMoney = parseFloat(displayMoney);
    return convertDisplayMoney;
};


function setInnerTextIdAndValue(id,value){
     document.getElementById(id).innerText = value;
  
}