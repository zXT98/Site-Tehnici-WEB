var jocuri1 = ["911","ARK","Cloud of Pirates","Conan","CSGO","DayZ","Deceit","Down","Dying Light","Elder Scrolls","Factorio","Far Cry","H1Z1","Minecraft","Pillars of Eternity","Rainbow Six","Stardew Valley","The Division","The Hunter","The Witcher"]
var jocuri2 = []
var jocuri3 = []

function push911(){
	jocuri2.push("911");
	document.getElementById("911").innerHTML = jocuri2;
}

function push_ark(){
	jocuri2.push("ARK");
	document.getElementById("ARK").innerHTML = jocuri2;
}

function push_cloud(){
	jocuri2.push("cloud");
	document.getElementById("cloud").innerHTML = jocuri2;
}

function push_conan(){
	jocuri2.push("conan");
	document.getElementById("conan").innerHTML = jocuri2;
}

function push_csgo(){
	jocuri2.push("csgo");
	document.getElementById("csgo").innerHTML = jocuri2;
}

function push_deceit(){
	jocuri2.push("deceit");
	document.getElementById("deceit").innerHTML = jocuri2;
}

function push_deceit(){
	jocuri2.push("deceit");
	document.getElementById("deceit").innerHTML = jocuri2;
}

function push_down(){
	jocuri2.push("down");
	document.getElementById("down").innerHTML = jocuri2;
}

function push_dyl(){
	jocuri2.push("dyl");
	document.getElementById("dyl").innerHTML = jocuri2;
}

function push_elder(){
	jocuri2.push("elder");
	document.getElementById("elder").innerHTML = jocuri2;
}

function push_factorio(){
	jocuri2.push("factorio");
	document.getElementById("factorio").innerHTML = jocuri2;
}

function push_farcry(){
	jocuri2.push("farcry");
	document.getElementById("farcry").innerHTML = jocuri2;
}

function push_h1z1(){
	jocuri2.push("h1z1");
	document.getElementById("h1z1").innerHTML = jocuri2;
}

function push_minecraft(){
	jocuri2.push("minecraft");
	document.getElementById("minecraft").innerHTML = jocuri2;
}


function push_pillars(){
	jocuri2.push("pillars");
	document.getElementById("pillars").innerHTML = jocuri2;
}

function push_rainbow(){
	jocuri2.push("rainbow");
	document.getElementById("rainbow").innerHTML = jocuri2;
}

function push_stardew(){
	jocuri2.push("stardew");
	document.getElementById("stardew").innerHTML = jocuri2;
}


function push_division(){
	jocuri2.push("division");
	document.getElementById("division").innerHTML = jocuri2;
}

function push_hunter(){
	jocuri2.push("hunter");
	document.getElementById("hunter").innerHTML = jocuri2;
}

function push_witcher(){
	jocuri2.push("witcher");
	document.getElementById("witcher").innerHTML = jocuri2;
}

function push_dayz(){
	jocuri2.push("dayz");
	document.getElementById("dayz").innerHTML = jocuri2;
}



function pop911(){
	jocuri2.pop("911");
	document.getElementById("911").innerHTML = jocuri2;
}

function pop_ark(){
	jocuri2.pop("ARK");
	document.getElementById("ARK").innerHTML = jocuri2;
}

function pop_cloud(){
	jocuri2.pop("cloud");
	document.getElementById("cloud").innerHTML = jocuri2;
}

function pop_conan(){
	jocuri2.pop("conan");
	document.getElementById("conan").innerHTML = jocuri2;
}

function pop_csgo(){
	jocuri2.pop("csgo");
	document.getElementById("csgo").innerHTML = jocuri2;
}

function pop_deceit(){
	jocuri2.pop("deceit");
	document.getElementById("deceit").innerHTML = jocuri2;
}

function pop_deceit(){
	jocuri2.pop("deceit");
	document.getElementById("deceit").innerHTML = jocuri2;
}

function pop_down(){
	jocuri2.pop("down");
	document.getElementById("down").innerHTML = jocuri2;
}

function pop_dyl(){
	jocuri2.pop("dyl");
	document.getElementById("dyl").innerHTML = jocuri2;
}

function pop_elder(){
	jocuri2.pop("elder");
	document.getElementById("elder").innerHTML = jocuri2;
}

function pop_factorio(){
	jocuri2.pop("factorio");
	document.getElementById("factorio").innerHTML = jocuri2;
}

function pop_farcry(){
	jocuri2.pop("farcry");
	document.getElementById("farcry").innerHTML = jocuri2;
}

function pop_h1z1(){
	jocuri2.pop("h1z1");
	document.getElementById("h1z1").innerHTML = jocuri2;
}

function pop_minecraft(){
	jocuri2.pop("minecraft");
	document.getElementById("minecraft").innerHTML = jocuri2;
}


function pop_pillars(){
	jocuri2.pop("pillars");
	document.getElementById("pillars").innerHTML = jocuri2;
}

function pop_rainbow(){
	jocuri2.pop("rainbow");
	document.getElementById("rainbow").innerHTML = jocuri2;
}

function pop_stardew(){
	jocuri2.pop("stardew");
	document.getElementById("stardew").innerHTML = jocuri2;
}


function pop_division(){
	jocuri2.pop("division");
	document.getElementById("division").innerHTML = jocuri2;
}

function pop_hunter(){
	jocuri2.pop("hunter");
	document.getElementById("hunter").innerHTML = jocuri2;
}

function pop_witcher(){
	jocuri2.pop("witcher");
	document.getElementById("witcher").innerHTML = jocuri2;
}

function pop_dayz(){
	jocuri2.pop("dayz");
	document.getElementById("dayz").innerHTML = jocuri2;
}


function buy_first_5_games(){
	jocuri2.push("witcher","minecraft","dyl","pillars","stardew");
}

function buy_last_5_games(){
	jocuri3.push("ARK","conan","dayz","elder","division");
}

function concatenare_jocuri(){
var concatenare = jocuri2.concat(jocuri3);
document.getElementById("concatenare").innerHTML = concatenare;
}

function validate(){
	var x = document.getElementById('exampleInputPassword1').value;
	
	if(x.length < 8){
		document.getElementById("demo").innerHTML="Lungimea parolei trebuie sa fie de 8";
		document.getElementById("demo").style.color="Red";
		return("too_short");
	}
	else if(x.search(/[0-9]/)==-1){
		document.getElementById("demo").innerHTML="Cel putin o cifra trebuie introdusa";
		document.getElementById("demo").style.color="Red";
		return("no_number");
	}
	else if(x.search(/[a-z]/)==-1){
		document.getElementById("demo").innerHTML="Cel putin o litera mica trebuie introdusa";
		document.getElementById("demo").style.color="Red";
		return("no_lowercase_letter");
	}
	else if(x.search(/[A-Z]/)==-1){
		document.getElementById("demo").innerHTML="Cel putin o litera mare trebuie introdusa";
		document.getElementById("demo").style.color="Red";
		return("no_upercase_letter");
	}
	else if(x.search(/[!\@\#\$\%\^\&\*\(\)\-\_\=\+\;\:]/)==-1){
		document.getElementById("demo").innerHTML="Cel putin un caracter special trebuie introdus";
		document.getElementById("demo").style.color="Red";
		return("no_special_char");
	}
	document.getElementById("demo").innerHTML="Parola satisface conditiile";
		document.getElementById("demo").style.color="Green";
		return("ok");
}


 $(document).ready(function(){
	 const Url='https://jsonplaceholder.typicode.com/posts';
	 $('.btn').click(function(){
		 $.ajax({
			 url: Url,
			 type:"GET",
			
			
			 success: function(result){
			 console.log(result)
			 },
			 error: function(error){
				 console.log(`Error ${error}`)
			 }
		 })
	 })
 })
//type: poate sa fie GET sau POST
//trebuie adaugat data:data (daca tipul este POST)
//dataType: JSON sau HTML, xml, txt,jsonplaceholder


//codul din laborator care afiseaza array-ul
 $.get("https://jsonplaceholder.typicode.com/posts")
     .done(function(response) {
         console.log( "s-a terminat cu bine",response);
     })
     .fail(function(error) {
         console.log( "error",error);
     })
     .always(function() {
         console.log( "Cod-ul din .always se apeleaza de fiecare data, indiferent daca request-ul a fost cu success sau cu fail" );
     });



/////////////////////////////////
	
//aceasta metoda executa GET requests
//ia doi parametri: un endpoint si o functie callback
const Url='https://jsonplaceholder.typicode.com/posts';
$('.btn').click(function(){
	$.get(Url, function(data,status){
		console.log(`${data}`)
	});
})


//metoda de a posta data pe un server
//ia trei parametri: url, data pe care vrem sa o postam si o functie callback
const data={
	name:"Said",
	id:23
}

$('.btn').click(function(){
	$.get(Url,data, function(data, status){
		console.log(`${data} and status is ${status}`)
	});
})

//aceasta metoda primeste numai data care e in JSON format
//ia doi parametri: url si functia callback
$('.btn').click(function(){
	$.getJSON(Url, function(result){
		console.log(result)
	});
})


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
	$("body").css("background-color", getRandomColor());
}
 var interval= setInterval(setRandomColor,1000000)
 
function setColor(){
	$("body").css("background-color", getRandomColor());
	clearInterval(interval);
}

function inactivitate(){
  alert("Sunteti inactiv, va rugam frumos selectati un joc");
}

setTimeout(inactivitate,10000);

var para1 = document.createElement("x1");
var nod1 = document.createTextNode("1.)Pe butonul 'Categorii' puteti vedea toate jocurile sortate pe categorii");
para1.appendChild(nod1);


var element1 = document.getElementById("adaugare_stergere1");
var copil1 = document.getElementById("p1");
element1.insertBefore(para1,copil1);



var para2 = document.createElement("x2");
var nod2 = document.createTextNode("2.)Puteti schimba culoarea site-ului cu una random prin butonul 'Schimba culoarea'");
para2.appendChild(nod2);


var element2 = document.getElementById("adaugare_stergere2");
var copil2 = document.getElementById("p2");
element2.insertBefore(para2,copil2);



var para3 = document.createElement("x3");
var nod3 = document.createTextNode("3.)Pe pagina fiecarui joc puteti viziona un trailer");
para3.appendChild(nod3);


var element3 = document.getElementById("adaugare_stergere3");
var copil3 = document.getElementById("p3");
element3.insertBefore(para3,copil3);


function removeElement3() {
   var parinte3 = document.getElementById("adaugare_stergere3");
   parinte3.remove();
     
}

function removeElement2() {
   var parinte2 = document.getElementById("adaugare_stergere2");
   parinte2.remove();
}

function removeElement1() {
   var parinte1 = document.getElementById("adaugare_stergere1");
   parinte1.remove();
}


var sound      = document.createElement('audio');
sound.id       = 'audio-player';
sound.controls = 'controls';
sound.src      = '../audio/song.mp3';
sound.type     = 'audio/mpeg';
document.getElementById('song').appendChild(sound);

var iframe = document.createElement('iframe');
iframe.src = 'https://www.youtube.com/embed/cpP-fCo8Dn4';
iframe.width = '560';
iframe.height = '315';

var bottom = document.getElementById('bottom');
bottom.appendChild(iframe);

document.getElementById("site").addEventListener("click", function(event){
  event.preventDefault()
});

document.getElementById("twitter").addEventListener("click", function(event){
  event.preventDefault()
});


var ball=document.getElementById("stickman");
     ball.style.width="10%";
     ball.style.height="10%";
     ball.style.position="absolute";
     ball.style.top=0;
     ball.style.left=0;
    document.body.addEventListener("keypress",function(event){
    if(event.keyCode===119)
        {ball.style.top=parseInt(ball.style.top)-5+'px'}
    else if(event.keyCode===97)
        {ball.style.left=parseInt(ball.style.left)-5+'px'}
    else if(event.keyCode===115)
        {ball.style.top=parseInt(ball.style.top)+5+'px'}
    else if(event.keyCode===100)
        {ball.style.left=parseInt(ball.style.left)+5+'px'}
    else if(event.keyCode===13)
        {alert("Felicitări");}

});


function calc(){
		var a = parseInt(document.querySelector("#value1").value);
		var b = parseInt(document.querySelector("#value2").value);
		var op = document.querySelector("#operator").value;
		var calculate;
		
		if (op == "add"){
			calculate = a + b;
		}	else if (op == "min"){
			calculate = a - b;
		}	else if (op == "div"){
			calculate = a / b;
		}	else if (op == "mul"){
			calculate = a * b;
		}
		
		document.querySelector("#result_calculator").innerHTML = calculate;
}

$(function(){
	$('#animateBtn').click(function(){
		animate('#anim-head', 'bounce');
		animate('#anim-body', 'rubberBand');
		
		return false;
	});
	
//Animatie
function animate(element, animation){
	$(element).addClass('animated '+animation);
	var wait = setTimeout(function(){
		$(element).removeClass('animated '+animation);
	}, 1000);
}
})
