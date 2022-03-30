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
var scoreboardBtn = $(".scoreboardBtn");
var clearScores = $(".clearScores");
var goBack = $(".goBack");
//a div on scoreboard to display initials/scores
var initialsEl = $("#initialsEl");
var finalScore = $("#finalScore");

var choice;
var timerCount = $(".timerCount");
var secondsLeft = 60;
var score = 0;
var timerInterval;

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

//clears scoreboard data
function clearBoard() {
  localStorage.clear();
  displayScoreboard();
}

//returns to start screen
function startScreen() {
  document.location.reload();
}

//displays scoreboard
function displayScoreboard() {
  initialsEl.text("");
  //hide start page
  $("#jumboStart").addClass("hidden");

  //listen for Clear scores
  clearScores.on("click", clearBoard);
  //listen for Go Back
  goBack.on("click", startScreen);
  //we can use this array to loop and display scores
  displayArr = JSON.parse(localStorage.getItem("allEntries"));
  //if storage is empty, show empty scoreboard
  if (displayArr === null) {
    initialsEl.text("");
  } else {
    for (var i = 0; i < displayArr.length; i++) {
      //dynamically append data to this h2 to display on scoreboard
      var initialsData = $("<h2>");
      initialsData.text(displayArr[i]);
      initialsEl.append(initialsData);
    }
  }
  //hide Enter Initials form
  $("#goodJob").hide();
  //show scoreboard
  $("#scoreBoard").removeClass("hidden");
}
//screen to display final score and enter initials
function initialsScreen() {
  //"GOOD JOB, Your score was:"
  var yourScore = $("<h3>");
  yourScore.text("Your final score was " + score);
  finalScore.append(yourScore);
  //hide questionCard
  $("div.questionCard").hide();
  //show scoreboard
  $("#goodJob").removeClass("hidden");
  //listen for submit
  submitBtn.on("click", function (event) {
    event.preventDefault();

    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if (existingEntries === null) existingEntries = [];
    var initials = $("#initials").val() + ":  " + score;
    localStorage.setItem("entry", JSON.stringify(initials));
    existingEntries.push(initials);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));

    displayScoreboard();
  });
}

//pops() an object from questions and places the data into Q&A buttons
function questionAnswerFill() {
  //if questions array is empty, show scoreboard. Else, fill next Q&As
  if (questions.length === 0) {
    clearInterval(timerInterval);
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
  secondsLeft = 60;
  //starts timer
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerCount.text(secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      initialsScreen();
      secondsLeft = 60;
    }
  }, 1000);
  //hides start screen
  $("#jumboStart").addClass("hidden");

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
      score = score + 10;
      questionAnswerFill();
    } else {
      secondsLeft = secondsLeft - 10;
      questionAnswerFill();
    }
  });
  //listens for click on 2nd button
  aTwo.on("click", function (event) {
    event.preventDefault();

    if (choice.answers.b.value) {
      score = score + 10;
      questionAnswerFill();
    } else {
      secondsLeft = secondsLeft - 10;
      questionAnswerFill();
    }
  });
  //listens for click on 3rd button
  aThree.on("click", function (event) {
    event.preventDefault();

    if (choice.answers.c.value) {
      score = score + 10;
      questionAnswerFill();
    } else {
      secondsLeft = secondsLeft - 10;
      questionAnswerFill();
    }
  });
  //listens for click on 4th button
  aFour.on("click", function (event) {
    event.preventDefault();

    if (choice.answers.d.value) {
      score = score + 10;
      questionAnswerFill();
    } else {
      secondsLeft = secondsLeft - 10;
      questionAnswerFill();
    }
  });

  //shows question w/answers
  $("#questionCard").removeClass("hidden");
}
startBtn.on("click", init);
scoreboardBtn.on("click", displayScoreboard);
