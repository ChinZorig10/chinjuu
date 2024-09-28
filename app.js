// For loop -> davtalt -> neg kodiig olon dahin ashiglan
// For(hedees_ehleh, hed_hurtel, nemegdeh/hasagdah ){}
for(var i=1; i<=10;i++){
	console.log(i+"bat");
}
// i=1 -> 1<=10 -> true => 1bat -> i++
// i=2 -> 2<=10 -> true => 1bat -> i++
for(var i=10; i>=1;i--){
	console.log(i);
}
for(var i=1; i<=20;i++){
	if(i%2==0){
	console.log("tegsh"+i);
	}
}
var too=8;
for(var i=1; i<=10;i++){
	console.log(too+"x"+i+"="+too*i);
}
var niilber = 0;
var urjver = 1;
for(var i=1; i<=3; i++){
	niilber = niilber+i;
	urjver = urjver*i
}
console.log(niilber);
console.log(urjver);
var random = Math.floor(Math.random()*10)+1;
console.log(random)
for(var i=1; i<=3; i++){
	var too = +prompt("1-10 hoorond toog taana uu")
	if(random==too){
		alert("zuv taalaa");
		alert("Ta "+ i + "dahi oroldlogoor yllaa WINNER")
		break;
	}else if(too>10 || too<0){
		alert("buruu utga oruullaa");
	}else if(too>random){
		alert("ih baina")
	}else if(too<random){
		alert("baga baina")
		alert("buruu taalaa hasah n 1ami");
	}else{
        
	}
	if(i==3){
		alert("Tanii ami duuslaa DEFEAT")
	}
}