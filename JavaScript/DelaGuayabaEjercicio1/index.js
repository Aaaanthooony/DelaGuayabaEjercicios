//Anthony Rodriguez Ledezma 207720941
function guayaba(numbers) {
  var toprint = [];

  for (let i = 0; i <= numbers.length - 1; i++) {
    var variable = 1;

    for (let j = 0; j <= numbers.length - 1; j++) {
      if (j !== i) {
        variable = variable * numbers[j];
      }

    }

    toprint[i] = variable;
  }

  console.log(toprint);
}

let numbers1 = [2, 3, 4, 6];
guayaba(numbers1);

let numbers2 = [123, 67, 890, 4];
guayaba(numbers2);

let numbers3 = [2, 3, 7, 9, 4, 5, 6, 9, 12];
guayaba(numbers3);


