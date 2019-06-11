const readLine = require("readline");
const rl = readLine.createInterface({
  //Interfaz
  input: process.stdin,
  output: process.stdout
});

const question = [
  "Cual es tu nombre?",
  "Cual es tu apellido",
  "Cual es tu edad?"
];

const askQuestions = (rl, question) => {
  return new Promise((result, reject) => {
    rl.question(question, answer => {
      result(answer);
    });
  });
};

const ask = function(question) {
  return new Promise(async resolve => {
    let results = [];
    for (let i = 0; i < question.length; i++) {
      const result = await askQuestions(rl, question[i]);
      results.push(result);
    }
    rl.close();
    resolve(results);
  });
};

ask(question).then(q => {
  console.log(`Hola ${q[0]} ${q[1]}, tu edad en años es ${q[2]}`);
});
