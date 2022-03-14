function findCircleArea(radius) {
  const pi = Math.PI;
  const area = radius * pi * pi;

  console.log(area);

  return area;
}

function whenIsFirstOfJanuary() {
  for (let year = 2014; year < 2050; ++year) {
    let day = new Date(year, 0, 1);
    if (day.getDay() === 0) {
      console.log("The 1st January of " + year + " is a Sunday");
    }
  }
}

function findNInFibonacci(n) {
  if (n === 0) {
    console.log("Pour n = 0 la suite vaut : 0");
    return 0;
  } else if (n === 1) {
    console.log("Pour n = 1 la suite vaut : 1");
    return 1;
  } else {
    const resultForN = findNInFibonacci(n - 2) + findNInFibonacci(n - 1);
    console.log("Pour n = " + n + " la suite vaut : " + resultForN);
    return resultForN;
  }
}

findCircleArea(3);
whenIsFirstOfJanuary();
findNInFibonacci(8);
