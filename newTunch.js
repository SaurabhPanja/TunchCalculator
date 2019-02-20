var goldInGm = 30.0,
    tunch = 87.5,
    newTunch = 91.666,
    newGoldinGm;

newGoldinGm = (goldInGm*((100-tunch)/100)/((100-newTunch)/100) - goldInGm);
console.log(newGoldinGm);
