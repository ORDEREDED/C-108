function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/avPAiN0ov/model.json',modelready);
}
function modelready(){
classifier.classify(gotresults);
}
function gotresults(error, results){
if (error){
console.error(error);
}
else{
console.log(results);
random_r=Math.floor(Math.random()*255)+1;
random_g=Math.floor(Math.random()*255)+1;
random_b=Math.floor(Math.random()*255)+1;
document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById("result_label").innerHTML="I can hear"+results[0].label;
document.getElementById("result_confidence").innerHTML="accuracy"+(results[0].confidence*100).toFixed(2)+"%";
ione=document.getElementById("alien1");
itwo=document.getElementById("alien2");
ithree=document.getElementById("alien3");
ifour=document.getElementById("alien4");
if(results[0].label=='Bell'){
    ione.src='aliens-01.gif';
    itwo.src='aliens-02.png';
    ithree.src='aliens-03.png';
    ifour.src='aliens-04.png';
}
else if(results[0].label=='Roar'){
    ione.src='aliens-01.png';
    itwo.src='aliens-02.gif';
    ithree.src='aliens-03.png';
    ifour.src='aliens-04.png';
}
else if(results[0].label=='Waka Waka'){
    ione.src='aliens-01.png';
    itwo.src='aliens-02.png';
    ithree.src='aliens-03.gif';
    ifour.src='aliens-04.png';
}
else if(results[0].label=='Whistle'){
    ione.src='aliens-01.png';
    itwo.src='aliens-02.png';
    ithree.src='aliens-03.png';
    ifour.src='aliens-04.gif';
}
else{
    ione.src='Luisa 1.gif';
    itwo.src='Luisa 1.gif';
    ithree.src='Luisa 1.gif';
    ifour.src='Luisa 1.gif';
}
}
}