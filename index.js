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

findCircleArea(3);
whenIsFirstOfJanuary();
