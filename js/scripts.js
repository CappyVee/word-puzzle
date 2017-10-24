// $(document).ready(function(){
//   $("#formPhrase").submit(function(event){
//     var vowels = ["a", "e", "i", "o", "u"];
//     var words = ("oooiiiuuueee");
//     for (var i = 0; i < vowels.length; i++){
//
//       replace = words.replace(vowels[i], "-");
//       replace.push()
//       alert(replace);
//
//
//     };
//
//   event.preventDefault();
//   });//submit function end
// });//rdy function end
//
// $(document).ready(function(){
//   var words = "Hello World!";
//   words = words.slice ["a", "e", "i", "o", "u"]
//
//   alert(words);
//
//   event.preventDefault();
// });

//////////NEW SCRIPT BLOCK /////////

$(document).ready(function(){
  $("#formPhrase").submit(function(event){
    var words = $("input#phrase").val();
    var cloneWords = words.slice();
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    for (var i = 0; i < vowels.length; i++){
      var words = words.split(vowels[i]).join("-");



    };//end for loop
    $(".formPhrase").text(words);
    $(".show").hide();
    $(".hide").show();
    event.preventDefault();

    $("#formPhrase2").submit(function(event){
      var compareStr = $("input#phrase2").val();
      if (cloneWords === compareStr) {
        $(".victory").show();
      } else {
        $(".failure").show();
      }
      event.preventDefault();
    });
  });
});

//////////IRRELEVANT BELOW!!////////
// var friends = ['jim', 'joe', 'bob', 'bill', 'steve'];
// for (var index = 0; index < friends.length; index ++) {
//   alert("hello " + friends[index] + "!");
// };
