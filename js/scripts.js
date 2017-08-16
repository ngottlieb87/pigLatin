var vows = ["a", "e", "i", "o", "u"]

function toPig(sentence){

  toWords = sentence.toLowerCase().split(" ");
  console.log(toWords);
  for(i=0; i < toWords.length; i++){
      toWords[i]= toWords[i].split("");
  }
    
  console.log(toWords);
}
// function toPig(sentence){
//   toWords = sentence.toLowerCase().split(" ");
//
//   for(i=0; i<toWords.length; i++){
//     if(checkVow(toWords[i])){
//       toWords[i] = toWords[i] + "way";
//     }
//   }
//   alert(vows.length)
//   alert(toWords);
// }
//
// function checkVow(word){
//   for(i=0; i<vows.length; i++){
//       if (vows[i] === word.charAt(0)){
//         return true;
//       }else{
//         return false;
//       }
//     }
//
//   }




$(document).ready(function(){
  $("#pigForm").submit(function(event){
    event.preventDefault();

    var sentence = $("#pigInput").val();
    toPig(sentence);
  });
});
