
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (nodeAnswer) => {
  // console.log(`Thank you for your valuable feedback: ${nodeAnswer}`);
  
  rl.question("What's your name? Nicknames are also acceptable :) ", (nameAnswer) => {
    // console.log(`That's a nice name: ${nameAnswer}`);
    
    rl.question("What's an activity you like doing? ", (actAnswer) => {
      // console.log(`That sounds like a lot of fun, ${actAnswer}`);
      
      rl.question('What do you listen to while doing that? ', (musicAnswer) => {
        // console.log(`I like ${musicAnswer}!!`);
        
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (mealAnswer) => {
          // console.log(`I like ${mealAnswer} too!`);

          rl.question("What's your favourite thing to eat for that meal? ", (foodAnswer) => {
            // console.log(`${foodAnswer} sounds delicious!`);
            
            rl.question('Which sport is your absolute favourite? ', (sportAnswer) => {
              // console.log(`I like to watch ${sportAnswer} too!!`);
              
              rl.question('What is your superpower? In a few words, tell us what you are amazing at: ', (powerAnswer) => {
                // console.log(`${powerAnswer} sounds very interesting!`);
                
                rl.close();

                console.log();
                console.log(` ${nameAnswer} thinks node.js is ${nodeAnswer}. ${nameAnswer} likes to ${actAnswer} and listen to ${musicAnswer} while doing it. ${nameAnswer}'s favourite food is ${foodAnswer} and likes eating it during ${mealAnswer}. ${sportAnswer} is their favourite sport and has an amazing power of ${powerAnswer}. `);
                console.log();

              });
            });
          });
        });
      });
    });
  });
});
