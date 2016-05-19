function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}


var createdTime,clickedTime,reactionTime,bestTime=100;
var disco =null;


document.getElementById('box').onclick=function(){
	clickedTime=Date.now();
	reactionTime=(clickedTime-createdTime)/1000;
	if(reactionTime<bestTime){
		bestTime=reactionTime;
	}
	document.getElementById('best').innerHTML=bestTime+"s";
	document.getElementById('last').innerHTML=reactionTime+"s";
	document.getElementById('box').style.visibility="hidden";
	setTimeout(makeBox,Math.random()*500);
}




function makeBox(){
	document.getElementById('box').style.top=(Math.random()*300 + 100)+"px";
	document.getElementById('box').style.left=(Math.random()*400)+"px";
	var color=getRandomColor();
	document.getElementById('box').style.backgroundColor=color;
	document.getElementById('lasttime').style.color=color;
	document.getElementById('box').style.borderRadius=(Math.random()*150)+"px";
	document.getElementById('box').style.visibility="visible";	
	createdTime=Date.now();
}




makeBox();


document.getElementById('easy').onclick=function(){
	clearInterval(disco);
	document.getElementById('heading').innerHTML="REACTION TIME";
	document.body.style.backgroundColor="transparent";
	document.getElementById('easy').style.color="red";
	document.getElementById('hard').style.color="black";
}


document.getElementById('hard').onclick=function(){
	document.getElementById('heading').innerHTML="REACTION TIME (Hard mode)";
	document.getElementById('hard').style.color="red";
	document.getElementById('easy').style.color="black";
	disco = setInterval(function(){
		document.getElementById('heading').style.color=getRandomColor();
		document.body.style.backgroundColor=getRandomColor();;
	},75);

}