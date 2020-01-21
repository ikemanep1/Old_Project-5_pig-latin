// Back end
function convert(outputs) {
  result = []
  outputs.forEach(function(output) {
     if (output.length === 1){
      var ayWord = output.concat("ay");
      result.push(ayWord);
    } else if (output.toLowerCase().charAt(0).includes("a") || output.toLowerCase().charAt(0).includes("e") || output.toLowerCase().charAt(0).includes("i") || output.toLowerCase().charAt(0).includes("o") || output.toLowerCase().charAt(0).includes("u")) {
    var wayWord = output.concat("way").slice(1);
    result.push(wayWord);
  } else if (output.toLowerCase().charAt(0).includes("qu")) {
    var quayWord = output.concat("quay").slice(2);
    result.push(quayWord);
  } else if (output.toLowerCase().charAt(1).includes("q")) {
    var letter = output.charAt(0)
    var squayWord = output.concat(letter).concat("quay").slice(3);
    result.push(squayWord);
    console.log(result);
} else if (!output.toLowerCase().charAt(0).includes("qu")) {
  var letter = output.charAt(0);
  var cayWord = output.concat(letter).concat("ay").slice(1);
  result.push(cayWord);
  };
});
};
// Front end
output = []
$(document).ready(function(){
  $("form#english_input").submit(function(event){
    event.preventDefault();
    var inputs = $(".input").val();
    outputs = inputs.split(" ");
    convert(outputs);
    var finalResult = result.join(" ");
    console.log(finalResult);
      $(".results").append("<li>" + finalResult + "</li>");
  });
});
