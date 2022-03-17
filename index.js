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

function bruteForceCaesarCode(stringToDecode) {
  let stringInArray = [];
  let tempString = stringToDecode;

  const stringLength = stringToDecode.length;

  stringInArray = tempString.split("");

  let tempArray = [];

  for (let i = 1; i < 26; ++i) {
    for (let j = 0; j < stringLength; ++j) {
      tempArray[j] = tempString.charCodeAt(j) + 1;
      stringInArray[j] = String.fromCharCode(tempArray[j]);
    }
    tempString = stringInArray.join("");
    console.log(tempString);
  }

  // const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // let tempArray = stringToDecode;

  // for (let i = 0; i < 26; ++i) {
  //   for (let j = 0; j < stringToDecode.length; ++j) {
  //     if (tempArray.charAt(j) === alphabet.charAt(i)) {
  //       const tempIndex = tempArray.indexOf(tempArray.charAt(j));
  //       tempArray.replace(tempArray.charAt(j), alphabet.charAt(i + 1));
  //       console.log(tempArray);
  //     }
  //   }
  // }
}

function bruteforce(str) {
  let decryptedString = "";
  console.log("Voici les résultats :\n");
  const tab = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < 25; i++) {
    for (let x = 0; x < str.length; x++) {
      let c = str.charAt(x);
      let position = tab.indexOf(c);
      let decalage = (position + i) % 25;
      decryptedString += tab[decalage];
    }
    console.log(decryptedString);
    console.log("\n");
    decryptedString = "";
  }
}

bruteforce("caesar");

// findCircleArea(3);
// whenIsFirstOfJanuary();
// findNInFibonacci(8);
// bruteForceCaesarCode("dylan");
