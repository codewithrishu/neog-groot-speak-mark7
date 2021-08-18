//storing html elements value
var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");
var btn =  document.querySelector("#btn");

   
//adding input text to url
function geturl(text) {
    
        return "https://api.funtranslations.com/translate/groot.json" + "?" + "text=" + text;
    
}

//error handler
function  errorHandler() {
    alert("Something went wrong with server! please try again later")
    
}

//processing the url
function fetchurl()
 {
     var input = inputText.value;
    fetch(geturl(input))
    .then(function (response) {
        return response.json()
        
    })
    .then(function (json) {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText
        
    })
    .catch(errorHandler)

  
}
 
btn.addEventListener('click', fetchurl) 


