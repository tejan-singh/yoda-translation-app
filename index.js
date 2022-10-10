var inputTextBox = document.body.querySelector("#inputTextBox");
var outputTextBox = document.body.querySelector("#outputTextBox");
var translateButton = document.body.querySelector("#translate-btn");

var apiUrl = "https://api.funtranslations.com/translate/yoda.json";

const translate = () => {
  //input
  var inputText = inputTextBox.value;
  var requestUrl = apiUrl + "?text=" + inputText;

  //processing
  fetch(requestUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      //output
      outputTextBox.value = data.contents.translated;
    })
    .catch((error) => {
      outputTextBox.value = error;
    });
};

translateButton.addEventListener("click", translate);
