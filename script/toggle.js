
toggleHandle('cashout','none');
toggleHandle("transection-historys","none");
toggleHandle('Get-Bonus','none');
toggleHandle('pay-bill','none');
toggleHandle('transfer','none');






document.getElementById('Add-money-box').addEventListener('click',function(){
    toggleHandle('Addmoney','block');
    toggleHandle('cashout','none');
    toggleHandle("transection-historys","none");
    toggleHandle('Get-Bonus','none');
    toggleHandle('pay-bill','none');
    toggleHandle('transfer','none');
});




document.getElementById('Cash-out-box').addEventListener('click',function(){
    toggleHandle('cashout','block');
    toggleHandle('Addmoney','none');
    toggleHandle("transection-historys","none");
    toggleHandle('Get-Bonus','none');
    toggleHandle('pay-bill','none');
    toggleHandle('transfer','none');

});



document.getElementById('pay-bill-box').addEventListener('click',function(){
    toggleHandle('pay-bill','block')
    toggleHandle('cashout','none');
    toggleHandle('Addmoney','none');
    toggleHandle("transection-historys","none");
    toggleHandle('Get-Bonus','none')
    toggleHandle('transfer','none');
 
 

})

document.getElementById('get-bonuse-box').addEventListener('click',function(){
    toggleHandle('Get-Bonus','block');
    toggleHandle('pay-bill','none');
    toggleHandle('cashout','none');
    toggleHandle('Addmoney','none');
    toggleHandle("transection-historys","none");
    toggleHandle('transfer','none');
  

})

document.getElementById('transfer-box').addEventListener('click',function(){
    toggleHandle('transfer','block');
    toggleHandle('cashout','none');
    toggleHandle("transection-historys","none");
    toggleHandle('Get-Bonus','none');
    toggleHandle('pay-bill','none');
    toggleHandle('Addmoney','none');
})


function toggleHandle(id,status){
    document.getElementById(id).style.display = status;
}




//? Details code....

// document.getElementById("cashout").style.display = "none";

// document.getElementById("Add-money-box").addEventListener("click",function(){
//     document.getElementById("Addmoney").style.display = "block";
//     document.getElementById("cashout").style.display = "none";
//     document.getElementById('pay-bill').style.display = "none";
//     document.getElementById('Get-Bonus').style.display = "none"


// });


// document.getElementById("Cash-out-box").addEventListener("click",function(){
//     document.getElementById("cashout").style.display = "block";
//     document.getElementById("Addmoney").style.display = "none";
//     document.getElementById('pay-bill').style.display = "none";
//     document.getElementById('Get-Bonus').style.display = "none"
// });








// function changeMood() {
//     if (dark == true) {
//       document.getElementById("body").style.background = "#fff";
//       document.getElementById("body").style.color = "#000000";
//       dark = false;
//     } else {
//       document.getElementById("body").style.background = "#000000";
//       document.getElementById("body").style.color = "#fff";

//       dark = true;
//     }
//   }