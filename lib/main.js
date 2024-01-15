document.addEventListener('DOMContentLoaded', function() {
  var goldInGm = document.getElementById('goldInGm');
  var tunch = document.getElementById('tunch');
  var alloyResult = document.getElementById('alloyResult');

  var impureGoldInGm = document.getElementById('impureGoldInGm');
  var impureTunch = document.getElementById('impureTunch');
  var newTunch = document.getElementById('newTunch');
  var fineGoldResult = document.getElementById('fineGoldResult');

  function calculateFromFine() {
      let gold = Number(goldInGm.value),
          tunchInput = Number(tunch.value);
      if (tunchInput <= 100) {
          alloyResult.innerHTML = "Alloys: " + ((gold * 100) / tunchInput - gold).toFixed(3) + " gram";
      } else {
          alloyResult.innerHTML = "<span class='bg-warning text-danger'>Wrong input!!</span>";
      }
  }

  function calculateFromImpure() {
      let newGoldinGm = (impureGoldInGm.value * ((100 - impureTunch.value) / 100) / ((100 - newTunch.value) / 100) - impureGoldInGm.value);
      fineGoldResult.innerHTML = "Fine <strong>Gold</strong> To be Added: " + newGoldinGm.toFixed(3);
  }

  var calculateAlloyButton = document.getElementById('calculateAlloy');
  calculateAlloyButton.addEventListener('click', calculateFromFine);

  var calculateFineGoldButton = document.getElementById('calculateFineGold');
  calculateFineGoldButton.addEventListener('click', calculateFromImpure);
});