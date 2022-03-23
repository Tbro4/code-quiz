//variables that reference the question and answers(buttons) to populate with object data
var qText = $(".questionText");
var aOne = $(".answerOne");
var aTwo = $(".answerTwo");
var aThree = $(".answerThree");
var aFour = $(".answerFour");
var startBtn = $(".startBtn");
// var choice;

//array of objects (questions with answers)
var questions = [
  {
    question: "How many strings are on a guitar?",
    answers: {
      a: { answer: "4", value: false },
      b: { answer: "6", value: true },
      c: { answer: "8", value: false },
      d: { answer: "5", value: false },
    },
  },
  {
    question: "How many notes in an octave?",
    answers: {
      a: { answer: "12", value: true },
      b: { answer: "16", value: false },
      c: { answer: "8", value: false },
      d: { answer: "10", value: false },
    },
  },
  {
    question:
      "The tool that attaches to the neck of a guitar to change keys is called a _______.",
    answers: {
      a: { answer: "Key", value: false },
      b: { answer: "Clip", value: false },
      c: { answer: "Clamp", value: false },
      d: { answer: "Capo", value: true },
    },
  },
  {
    question: "How many keys are on a full sized piano?",

    answers: {
      a: { answer: "44", value: false },
      b: { answer: "60", value: false },
      c: { answer: "88", value: true },
      d: { answer: "98", value: false },
    },
  },
  {
    question: "In choirs _______ is the highest voice part.",
    answers: {
      a: { answer: "Alto", value: false },
      b: { answer: "Soprano", value: true },
      c: { answer: "Tenor", value: false },
      d: { answer: "Bass", value: false },
    },
  },
  {
    question: "A trumpet is considered a ______ instrument.",
    answers: {
      a: { answer: "Woodwind", value: false },
      b: { answer: "Percussion", value: false },
      c: { answer: "Brass", value: true },
      d: { answer: "Wind", value: false },
    },
  },
  {
    question: "A violin bow is coated with ______ before playing.",
    answers: {
      a: { answer: "Resin", value: false },
      b: { answer: "Sap", value: false },
      c: { answer: "Talcum Powder", value: false },
      d: { answer: "Rosin", value: true },
    },
  },
];
// //replaces Lorem with question text
// qText.text(questions[0].question);
// //adds answer text to buttons
// aOne.text(questions[0].answers.a.answer);
// aTwo.text(questions[0].answers.b.answer);
// aThree.text(questions[0].answers.c.answer);
// aFour.text(questions[0].answers.d.answer);

// console.log(questions[1].answers.a.answer); //logs 12

//declare funtion to pick an object from the array and return it (to use in the other function)
function questionChooser() {
  var randomQ = questions[Math.floor(Math.random() * questions.length)];
  //   console.log(randomQ);

  //   qText.text(randomQ.question);
  //   aOne.text(randomQ.answers.a.answer);
  //   aTwo.text(randomQ.answers.b.answer);
  //   aThree.text(randomQ.answers.c.answer);
  //   aFour.text(randomQ.answers.d.answer);
  return randomQ;
}
//declares function to check if clicked answer is truthy
// function isTruthy(event) {
//   event.preventDefault();
//   console.log(choice);
// }

startBtn.on("click", function () {
  //hides start screen
  $("div.jumbotron").hide();
  var choice = questionChooser();
  //   console.log(questionChooser());

  qText.text(choice.question);
  aOne.text(choice.answers.a.answer);
  aTwo.text(choice.answers.b.answer);
  aThree.text(choice.answers.c.answer);
  aFour.text(choice.answers.d.answer);

  aOne.on("click", function (event) {
    event.preventDefault();

    if (choice.answers.a.value) {
      console.log("true!!"); //go to next question and add 1 to score (out of 7 Qs)
    } else {
      console.log("false!!"); //also subtract time and go to next question
    }
  });
  aTwo.on("click", function (event) {
    event.preventDefault();

    if (choice.answers.b.value) {
      console.log("true!!"); //go to next question and add 1 to score (out of 7 Qs)
    } else {
      console.log("false!!"); //also subtract time and go to next question
    }
  });
  aThree.on("click", function (event) {
    event.preventDefault();

    if (choice.answers.c.value) {
      console.log("true!!"); //go to next question and add 1 to score (out of 7 Qs)
    } else {
      console.log("false!!"); //also subtract time and go to next question
    }
  });
  aFour.on("click", function (event) {
    event.preventDefault();

    if (choice.answers.d.value) {
      console.log("true!!"); //go to next question and add 1 to score (out of 7 Qs)
    } else {
      console.log("false!!"); //also subtract time and go to next question
    }
  });

  //shows question w/answers
  $("#questionCard").removeClass("hidden");
});
