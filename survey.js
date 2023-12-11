const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  rl.question('What is an activity you like doing? ', (answer1) => {
    rl.question('What do you listen to while doing that? ', (answer2) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer3) => {
        rl.question('What is your favourite thing to eat for that meal? ', (answer4) => {
          rl.question('Which sport is your absolute favourite? ', (answer5) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer6) => {
              console.log(`Thank you for answering our survey, ${answer}. Here is your profile:\n`);
              console.log(`Hi, my name is ${answer}, I really like ${answer1}. When I am ${answer1}, I usually listen to ${answer2}. My favourite meal of the day is ${answer3}, and my favourite food is ${answer4}. My favourite sport is ${answer5}. My superpower is ${answer6}! Thank you for viewing my profile. :)\n`);
              rl.close();
            });
          });
        });
      });
    });
  });
});










