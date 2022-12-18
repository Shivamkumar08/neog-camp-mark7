var inputBox = document.querySelector('#input-box');
var outputBox = document.querySelector('#output-box');
var button = document.querySelector('#translate-btn');

var url = "	https://api.funtranslations.com/translate/chef.json";

function generateURL(input) {
  return url + "?" + "text=" + input;
}

function buttonClickHandler() {
  var inputText = inputBox.value;
  fetch(generateURL(inputText))
    .then(response => response.json())
    .then(json => {
      console.log(json)
      outputBox.innerText = json.contents.translated;
    })
}


button.addEventListener('click', buttonClickHandler);