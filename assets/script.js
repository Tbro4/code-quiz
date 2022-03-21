var startBtn = $(".startBtn");

startBtn.on("click", function () {
  $("div.jumbotron").hide();
  $("#questionCard").removeClass("hidden");
});
