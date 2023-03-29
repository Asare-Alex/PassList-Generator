const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
const minLength = 3;
const maxLength = 25;

for (let length = minLength; length <= maxLength; length++) {
  const combinations = generateCombinations(allChars, length);
  combinations.forEach((combination) => console.log(combination));
}

function generateCombinations(characters, length) {
  if (length === 1) {
    return characters.split("");
  } else {
    const smallerCombinations = generateCombinations(characters, length - 1);
    const combinations = [];
    for (let i = 0; i < characters.length; i++) {
      for (let j = 0; j < smallerCombinations.length; j++) {
        combinations.push(characters[i] + smallerCombinations[j]);
      }
    }
    return combinations;
  }
}
