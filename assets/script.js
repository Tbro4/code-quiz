//array of objects

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

console.log(questions[1].answers.a.answer); //logs 12

var startBtn = $(".startBtn");

startBtn.on("click", function () {
  $("div.jumbotron").hide();
  $("#questionCard").removeClass("hidden");
});
