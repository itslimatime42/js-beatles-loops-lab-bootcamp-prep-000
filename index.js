function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    var stringToAdd = `${musicians[i]} plays ${instruments[i]}`;
    newArray.push(stringToAdd);
  }
  return newArray
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    ++i;
  }
  return facts
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    ++n;
<<<<<<< HEAD
  } while (n < 15)
=======
  } while (i < 15)
>>>>>>> 1347a58ee1993029229a5ad0581a31785189ee14
  
  return newArray
}