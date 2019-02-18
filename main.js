var goldInGm = document.querySelector('input[name="goldInGm"]');
var tunch = document.querySelector('input[name="tunch"]');
var button = document.querySelector('button');
var h3 = document.querySelector('h3');
function Calculate(){
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
