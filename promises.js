// Opdracht 1

const testNum = num => new Promise(
    (resolve, reject) => {
        if (num < 10) {
            resolve(`Yes! ${num} is kleiner dan 10`)
        } else {
            reject(`Nee, ${num} is niet kleiner dan 10`)
        }
    }
);

testNum(10)
    .then(value => console.log(value))
    .catch(error => console.log(error))



// Opdracht 2


const makeAllCaps = words => {
  return new Promise((resolve, reject) => {
    if (
      words.every(word => {
        return typeof word === 'string';
      })
    ) {
      resolve(
        sortWords(
          words.map(word => {
            return word.toUpperCase();
          })
        )
      );
    } else {
      reject('Nope, contains not a string element!');
    }
  });
};

const sortWords = words => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject('strings only!');
    }
  });
};

 const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

makeAllCaps(arrayOfWords)
  .then(sortWords(arrayOfWords))
  .then(value => console.log(value))
  .catch(error => console.log(error));

const complicatedArray = ['cucumber', 44, true];

makeAllCaps(complicatedArray)
  .then(sortWords(complicatedArray))
  .then(value => console.log(value))
  .catch(error => console.log(error));
  

