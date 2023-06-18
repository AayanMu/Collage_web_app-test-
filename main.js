var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start1()
{
 recognition.start();
}


recognition.onresult= function run(event){
    var content= event.results[0][0].transcript;
    if(content=="selfie"){
        speak();
        
    }
    //document.getElementById("selfie").innerHTML=content;
 }

 camera = document.getElementById("camera");
 Webcam.set({
 width:500,
 height:500,
 image_format : 'jpeg',
 jpeg_quality:90
});

function speak(){

    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
    {
    img_id="selfie1";
    take_snapshot();
    speak_data = "Taking your next Selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }, 5000);

    setTimeout(function()
    {
    img_id="selfie2";
    take_snapshot();
    speak_data = "Taking your next Selfie in 15 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }, 10000);

    setTimeout(function()
    {
    img_id="selfie3";
    take_snapshot();
    }, 15000);

}


function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if (img_id=="selfie1"){
            document.getElementById("result1").innerHTML= '<img id="i1" src="'+data_uri+'"/>';
        }

        if (img_id=="selfie2"){
            document.getElementById("result2").innerHTML= '<img id="i2" src="'+data_uri+'"/>';
        }
        if (img_id=="selfie3"){
            document.getElementById("result3").innerHTML= '<img id="i3" src="'+data_uri+'"/>';
        }
    });
}

