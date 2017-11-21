const url = "http://numbersapi.com/"



type = ["trivia", "math", "year", "date"]


function getNumber() {


var randomNumber = Math.floor(Math.random() * (4))
var number = document.getElementById("userInput").value

if (number == "" || number == null){

  alert("Please Enter A Number")
  return;
}

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       for(i = 0; i < type.length - 1; i++){
       document.getElementById("content").innerHTML = "<hr>" + (type[randomNumber]).toUpperCase() + ": " + request.responseText + "<hr>";
      }
     }
  };

     request.open("GET", url + number + "/" + type[randomNumber], true);

  request.send();

}
