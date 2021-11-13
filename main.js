var prediction_1 = " ";
var prediction_2 = " ";

Webcam.set({
image_format : 'png',
png_quality :100,
width : 350,
height : 300
});
    
camera = document.getElementById("camera");
Webcam.attach('#camera');
    
function takepic()
{
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id="img_webapp" src="'+data_uri+'">';
});
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ARVr1X3ZK/model.json', modelLoaded);
    
function modelLoaded()
{
console.log('model loaded');
}

function check()
{
    img = document.getElementById("img_webapp");
    classifier.classify(img , gotResult);
}

function gotResult(error , results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_gesture").innerHTML = results[0].label;
        document.getElementById("result_gesture_1").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2  = results[1].label;
        speak();
        if(results[0].label == "Peace")
        {
            document.getElementById("update_gesture").innerHTML = "&#9996";
        }
        if(results[0].label == "Good")
        {
            document.getElementById("update_gesture").innerHTML = "&#128077";
        }
        if(results[0].label == "Bad")
        {
            document.getElementById("update_gesture").innerHtML = "&#128078";
        }
        if(results[1].label == "Wow")
        {
            document.getElementById("update_gesture").innerHTML = "&#128076";
        }
        if(results[0].label == "Peace")
        {
            document.getElementById("update_gesture_2").innerHTML = "&#9996";
        }
        if(results[0].label == "Good")
        {
            document.getElementById("update_gesture_2").innerHTML = "&#128077";
        }
        if(results[0].label == "Bad")
        {
            document.getElementById("update_gesture_2").innerHtML = "&#128078";
        }
        if(results[1].label == "Wow")
        {
            document.getElementById("update_gesture_2").innerHTML = "&#128076";
        }
    }
}

  function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction Is " + prediction_1;
    speak_data_2 = "The Second Prediction Is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}