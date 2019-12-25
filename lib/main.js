var goldInGm = document.querySelector('input[name="goldInGm"]');
var tunch = document.querySelector('input[name="tunch"]');
var button = document.querySelector('button');
var h3 = document.querySelectorAll('h3')[0];
function CalculateFromFine(){
  let gold = Number(goldInGm.value),
      tunchInput = Number(tunch.value);
  if(tunchInput <= 100){
    h3.innerHTML = "Alloys : " +
    ((gold *100)/ tunchInput - gold).toFixed(3) + " gram";
    console.log(((gold *100)/ tunchInput - gold));
  }else{
    h3.innerHTML = "<span class='bg-warning text-danger'>Wrong input!!</span>"
  }
}

//impure gold

var impureGoldInGm = document.querySelector('input[name="impureGoldInGm"]'),
    impureTunch = document.querySelector('input[name="impureTunch"]'),
    newTunch = document.querySelector('input[name="newTunch"]'),
    impureH3 = document.querySelectorAll('h3')[1],
    newGoldinGm;
function CalculateFromImpure(){
  newGoldinGm = (impureGoldInGm.value*((100-impureTunch.value)/100)/((100-newTunch.value)/100)
  - impureGoldInGm.value);
  impureH3.innerHTML = "Fine <strong>Gold</strong> To be Added " + newGoldinGm.toFixed(3);
  //console.log(impureH3);
  console.log(newGoldinGm);
}
