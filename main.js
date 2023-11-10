var SpeechRecognition = window.webkitSpeechRecognition;
//Essa variavel guarda uma chave API(Atenção para texto)
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");
function start()
{
    document.getElementById("textbox").innerHTML = "";
    
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var Content = event.results[0][0].transcript;
Textbox.innerHTML = Content;
    console.log(Content);

    speak();

    document.getElementById("textbox").innerHTML = Content;
}


function speak()
{
    var synth = window.speechSynthesis;

    speakData = "Tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisisUtterance(speakData);

    synth.speak(utterThis);

    Webcam.attach(camera);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});