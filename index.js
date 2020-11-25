var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;
var i;


// WELCOMING THE USER:
console.log(chalk.green.bgGrey.bold("Hello Neo-G-Campians..!"));
var userName = readlineSync.question("Can I know your Name please: ");
console.log("Welcome " + chalk.green.underline.bold.bgGrey(userName.toUpperCase()) + ", We're going to have a quiz on " + chalk.yellow.underline.bold('DARK') + " web series.");
console.log("----------------------------------------");


// QUIZ RULES:
console.log("QUIZ RULES :")
console.log(chalk.bold.grey("\t 1. There will total of 10 questions.\n\t 2. For each correct answer there is 4 marks.\n\t 3. For every wrong answer there is a reward of -1 marks.\n\t 4. Total score will be displayed at the end of quiz."));
var verify=readlineSync.question("So, are you excited for the Quiz ;) [yes / hell-yeah] : "); 


// QUESTIONS ARRAY:
if(verify === "yes"||"hell-yeah"){
  var questions = [
    {
      question : "\n 1. Which of these people is NOT blood-related to Jonas? \n\t a.> Magnus \n\t b.> Katharina \n\t c.> Hannah \n\t d.> Ines \n"+ chalk.bold.grey("Enter your Choice: "),
      answer:"d"
    },{
      question : "\n 2. Who invents the time machine? \n\t a.> Claudia Tiedmann \n\t b.> Michael Kahnwald \n\t c.> H.G. Tannhaus \n\t d.> Helge Doppler \n"+ chalk.bold.grey("Enter your Choice: "),
      answer:"c"
    },{
      question : "\n 3. What is the name of Elisabeth’s interpreter in 2052? \n\t a.> Silja \n\t b.> Jana \n\t c.> Greta \n\t d.> Ines \n"+ chalk.bold.grey("Enter your Choice: "),
      answer:"a"
    },{
      question : "\n 4. What is the important question? \n\t a.> Not how but where \n\t b.> Not where but when \n\t c.> Not when but whom \n\t d.> Not whom but how \n"+ chalk.bold.grey("Enter your Choice: "),
      answer:"b"
    },{
      question : "\n 5. What is the name of the high school in Winden? \n\t a.> Liberty \n\t b.> Grundschule Stadtmitte \n\t c.> Moordale \n\t d.> Gesamtschule \n"+ chalk.bold.grey("Enter your Choice: "),
      answer:"b"
    },{
      question : "\n 6. Who is Charlotte’s mother? \n\t a.> Franziska Doppler \n\t b.> Agnes \n\t c.> Doris \n\t d.> Elisabeth Doppler \n"+ chalk.bold.grey("Enter your Choice: "),
      answer:"d"
    },{
      question : "\n 7. Who takes Mikkel Nielsen into the cave? \n\t a.> His Son \n\t b.> His Brother \n\t c.> His Sister \n\t d.> His Father \n"+ chalk.bold.grey("Enter your Choice: "),
      answer:"a"
    },{
      question : "\n 8. Antichrist begins his rule at what age? \n\t a.> 21 \n\t b.> 33 \n\t c.> 23 \n\t d.> 12 \n"+ chalk.bold.grey("Enter your Choice: "),
      answer:"b"
    },{
      question : "\n 9. What is the name of the secret society of time travellers? \n\t a.> Sic Mundus Creatus Est \n\t b.> Mundus Creatus \n\t c.> Sic Mundus \n\t d.> Creatus Est \n"+ chalk.bold.grey("Enter your Choice: "),
      answer:"c"
    },{
      question : "\n 10. Who built the door connecting the cave portal? \n\t a.> Adam \n\t b.> Eva \n\t c.> Jonas \n\t d.> No One \n"+ chalk.bold.grey("Enter your Choice: "),
      answer:"d"
    },
  ]
}


// function begins
var readlineSync = require('readline-sync');
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.bold.green("YUP...!, Right answer"));
    score+= 4;
  }
  else{
    console.log(chalk.red("Nope...!, Wrong answer"));
    score = score - 2;
  }
  console.log("Your current score is: ",chalk.yellow.underline.bold(score));
  console.log("-----------------------");
}


// FOR STATEMENT & FUNCTION CALLING
for(i=0; i<questions.length; i++){
  var currentQues = questions[i];
  play(currentQues.question,currentQues.answer);
}


// PRINTING USER'S SCORE
if(score >= 30){
  console.log("Well-Done " + chalk.underline.bold.bgGrey(userName.toUpperCase()) + "!" + "\nYour final score is: ", chalk.green.bold(score));
}else{
  console.log("You need to watch the series again "+ chalk.underline.bold.bgGrey(userName.toUpperCase()) + ". Your final score is: ",chalk.yellow.bold(score));
}
console.log("_____________________________________________");


// PRINTING HIGHEST SCORER 
var highestScorer = [
  {
    name : "Arkan",
    score : 40
  },{
    name : "Muskan",
    score : 34
  },
]
console.log("List of High scorer QuizHeads: ")
for(i=0; i<highestScorer.length; i++){
  var hs = highestScorer[i];
  console.log("Name: "+ hs.name);
  console.log("Score: "+ hs.score);
  console.log("**********************");
}


// NOTICE FOR users 
console.log("Hey "+ chalk.green.underline.bold.bgGrey(userName.toUpperCase()) + ", if you scored more than or equal to the Highest-Scorer then please send me the Screenshot & i'll update your Name and Score." + chalk.yellow.underline.bold("\n\t THANK YOU SO MUCH FOR PARTICIPATING IN THIS QUIZ."));