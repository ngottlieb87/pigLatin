function toPig(sentence){
  breakSentence(sentence);
  checkVow(toWords);
  console.log(toWords);
}


function breakSentence(string){

  toWords = string.toLowerCase().split(" ");
}
function checkVow(words){
  for (i=0; i<words.length; i++){
    if(words[i].charAt(0) === "a" ||words[i].charAt(0) === "e" ||words[i].charAt(0) === "i" ||words[i].charAt(0)=== "o" ||words[i].charAt(0) === "u"){
      words[i] = words[i]+"way";
    }
  }
}






$(document).ready(function(){
  $("#pigForm").submit(function(event){
    event.preventDefault();

    var sentence = $("#pigInput").val();
    toPig(sentence);
  });
});
