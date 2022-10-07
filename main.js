x = 0;

y = 0;

draw_circle = "";

draw_rectangle = "";


var SpeechRecognition = window.webkitSpeechRecognition; //It is a website responsible converting speech and voice to text.//

recognition  = new SpeechRecognition();  //Everytime the instruction changes, it will take a function from the webkitspeechrecognition website/api.//

function start(){

    document.getElementById("status").innerHTML = "The System is Listening, Please Speak.";

   recognition.start();  //Now it'll start recognizing the voice command after we display the status on our screen.//

}

recognition.onresult = function(event){

    console.log(event);

    var content = event.results[0][0].transcript;   //the event is the area where the text is placed. Transcript is the sentence or word that gets converted from speech to text. onresult stores the speech-to-text inside an event. We cannot write down event directly which is why we pass it inside a function and extract the text because of that. The two zeros are the arrays inside of the event where the transcript goes at the end.//

    document.getElementById("status").innerHTML = "The Speech has been recognized as;"+content;  //+ is used to concatinate a text and a variable together in js.//

    if(content=="circle" || content =="Circle"){  //== means that we are comparing and assigning at the same time.//

        x = Math.floor(Math.random()*900);  //<-- 900 is the width. 900 and x is used for the random x position.//

        y = Math.floor(Math.random()*600); //<-- 600 is the height. 600 and y is used for random y position.//

        document.getElementById("status").innerHTML = "The computer started drawing a circle.";

        draw_circle = "set";
    }

    if(content=="rectangle" || content =="Rectangle"){

        x = Math.floor(Math.random()*900);

        y = Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML = "Your computer started drawing you a fancy rectangle.";
        
        draw_rectangle = "set";  //set tells us when to draw a circle and when not to draw a circle.//
    }

}


function setup(){

    canvas = createCanvas(900, 600); //900 is the width and 600 is the height.//

}

function draw(){

    if(draw_circle=="set"){

        radius = Math.floor(Math.random()*100); //Math.floor removes all the decimal numbers and only gives us whole numbers.//

        circle(x, y, radius);

        document.getElementById("status").innerHTML = "The circle is drawn.";

        draw_circle = "";
    }

    if(draw_rectangle=="set"){

        rect(x, y, 70, 50);

        document.getElementById("status").innerHTML = "The rectangle is drawn.";

        draw_rectangle = "";

    }
}