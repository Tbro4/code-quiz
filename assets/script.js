//takes focus off the button when un-clicking
$(".btn").mouseup(function () {
  $(this).blur();
});
//variables that reference the question and answers(buttons) to populate with object data
var qText = $(".questionText");
var aOne = $(".answerOne");
var aTwo = $(".answerTwo");
var aThree = $(".answerThree");
var aFour = $(".answerFour");
var startBtn = $(".startBtn");
var submitBtn = $(".submitBtn");
var clearScores = $(".clearScores");
var goBack = $(".goBack");
//a div on scoreboard to display initials
var initialsEl = $("#initialsEl");
//dynamically append data to this h2 to display on scoreboard
var initialsData = $("<h2>");
var choice;

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

// console.log(questions);
//clears scoreboard data
function clearBoard() {}

//returns to start screen
function startScreen() {}

//displays scoreboard
function displayScoreboard() {
  //listen for Clear scores
  clearScores.on("click", clearBoard);

  //listen for Go Back
  goBack.on("click", startScreen);

  //hide Enter Initials form
  $("#goodJob").hide();
  //show scoreboard
  $("#scoreBoard").removeClass("hidden");
}
//screen to display final score and enter initials
function initialsScreen() {
  //"ALL DONE!" *Show score *enter initials
  //hide questionCard
  $("div.questionCard").hide();
  //show scoreboard
  $("#goodJob").removeClass("hidden");
  //listen for submit
  submitBtn.on("click", function (event) {
    event.preventDefault();
    //saves initials
    var initials = $("#initials").val();
    console.log(initials);
    initialsData.text(initials);
    initialsEl.append(initialsData);
    displayScoreboard();
  });
}

//pops() an object from questions and places the data into Q&A buttons
function questionAnswerFill() {
  //if questions array is empty, show scoreboard. Else, fill next Q&As
  if (questions.length === 0) {
    console.log("scoreboard time");
    initialsScreen();
  } else {
    choice = questions.pop();

    qText.text(choice.question);
    aOne.text(choice.answers.a.answer);
    aTwo.text(choice.answers.b.answer);
    aThree.text(choice.answers.c.answer);
    aFour.text(choice.answers.d.answer);
  }
}

function init() {
  //hides start screen
  $("#jumboStart").hide();

  //shuffles [questions]
  questions.sort(function () {
    return 0.5 - Math.random();
  });
  //fills the first Q&As
  questionAnswerFill();
  //listens for click on 1st button
  aOne.on("click", function (event) {
    event.preventDefault();

    if (choice.answers.a.value) {
      console.log("true!!");
      questionAnswerFill();
    } else {
      console.log("false!!");
      questionAnswerFill();
    }
  });
  //listens for click on 2nd button
  aTwo.on("click", function (event) {
    event.preventDefault();

    if (choice.answers.b.value) {
      console.log("true!!");
      questionAnswerFill();
    } else {
      console.log("false!!");
      questionAnswerFill();
    }
  });
  //listens for click on 3rd button
  aThree.on("click", function (event) {
    event.preventDefault();

    if (choice.answers.c.value) {
      console.log("true!!");
      questionAnswerFill();
    } else {
      console.log("false!!");
      questionAnswerFill();
    }
  });
  //listens for click on 4th button
  aFour.on("click", function (event) {
    event.preventDefault();

    if (choice.answers.d.value) {
      console.log("true!!");
      questionAnswerFill();
    } else {
      console.log("false!!");
      questionAnswerFill();
    }
  });

  //shows question w/answers
  $("#questionCard").removeClass("hidden");
}
startBtn.on("click", init);
