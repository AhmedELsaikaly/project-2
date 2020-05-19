
var sentences = ["The greatest glory in living lies not in never falling, but in rising every time we fall.",
"The way to get started is to quit talking and begin doing.","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
"If life were predictable it would cease to be life, and be without flavor.","Life is what happens when you're busy making other plans.",
"Spread love everywhere you go. Let no one ever come to you without leaving happier.","When you reach the end of your rope, tie a knot in it and hang on.",
"Always remember that you are absolutely unique. Just like everyone else.","The future belongs to those who believe in the beauty of their dreams.",
"Tell me and I forget. Teach me and I remember. Involve me and I learn.","The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
"It is during our darkest moments that we must focus to see the light.","Whoever is happy will make others happy too.","Spread love everywhere you go. Let no one ever come to you without leaving happier.",
"When you reach the end of your rope, tie a knot in it and hang on.","Always remember that you are absolutely unique. Just like everyone else.",
"Don't judge each day by the harvest you reap but by the seeds that you plant.","The future belongs to those who believe in the beauty of their dreams.",
"Tell me and I forget. Teach me and I remember. Involve me and I learn.","It is during our darkest moments that we must focus to see the light.",
"Whoever is happy will make others happy too.","You will face many defeats in life, but never let yourself be defeated.","The greatest glory in living lies not in never falling, but in rising every time we fall.",
"In the end, it's not the years in your life that count. It's the life in your years.","Never let the fear of striking out keep you from playing the game.",
"Life is either a daring adventure or nothing at all.","Many of life's failures are people who did not realize how close they were to success when they gave up.",
"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.","If life were predictable it would cease to be life and be without flavor."
]

function makeSpan(){
var x = $("#sentence").text()
$("#sentence").text('')
x = x.split('')
for (var i = 0 ; i< x.length ; i++){
$("#sentence").append($("<span></span>"))
$("#sentence span").last().text(x[i])
}
}

var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function round (){
$("#typedText").val('')
$("#sentence").text(randomElement(sentences))
makeSpan();
}
function check(){
	for (var i = 0 ; i< $("#sentence span").length ; i++){
	if ($("#sentence span").eq(i).attr('class') !== "correct"){
     return false
	} 
	}
	return true
}

$("#start").click(function (){
$("#typedText").val('')
if ($("#usertext").val() !== ''){
$("#sentence").text($("#usertext").val())
makeSpan();
count ();
}else{
$("#sentence").text(randomElement(sentences))
makeSpan();
count ();
}
});


$("#typedText").on( "input", function() {
var allspan = $("#sentence span")
var inputValues = $("#typedText").val().split('')

for(var i = 0 ; i< allspan.length ; i++){
	if (inputValues[i] === undefined){
       allspan.eq(i).attr('class','')	
    }
	else if (inputValues[i] !== undefined && inputValues[i]!== allspan.eq(i).text()){
        $("#sentence span").eq(i).attr('class', 'incorrect')
	}else{
		$("#sentence span").eq(i).attr('class', 'correct')
	}
}
if (check() === true){
round ();
}
});

var countDownDate = new Date((new Date().getTime())+120000).getTime();
function count (){setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $("#timer").text(minutes + "m " + seconds + "s ")

  if (distance < 0) {
    clearInterval(x);
     $("#timer").text("finished")
  }
}, 1000);
}




