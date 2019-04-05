// business logic

function beepBoop(input) {

  var output = [];

  for (var index = 0; index <= input; index ++) {
    if (index.toString().includes("3")) {
      output.push(" " + "I'm sorry, Ben & Josh; I'm afraid I can't do that.");
    } else if (index.toString().includes("2")) {
      output.push(" " + "boop");
    } else if (index.toString().includes("1")) {
      output.push(" " + "beep");
    } else {
      output.push(index);
    }
  }
  return output;
}

// UI logic
$(document).ready(function() {
  $("#beepForm").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("#userInput").val());
    var output = beepBoop(input).toString();
    $(".finalList").text(output);

    $("#roboResponse").show();
    $("#beepForm").hide();
    $("#newMessage").show();

  });
});
