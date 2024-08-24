timer();


async function checkOnlineStatus(IP){
	try {
		const online = await fetch(`https://backend.mr-stinktier.uk/testin?stat=${IP}`);
		if(IP=="self"){
			await online.text().then((text) => {temp = text;});
			document.getElementById("raspy-temp").innerHTML = temp + "°C";
		}
		return online.status;
  	} catch (err) {
        console.log(err);
		return false; // definitely offline
  	}
}

async function timer(){
	var cars = ["self", "192.168.115.66", "192.168.115.86"];

	for (let i = 0; i < cars.length; i++) {
		const result = await checkOnlineStatus(cars[i]);
		if(result==200){
			document.getElementById(cars[i]).style.backgroundColor = "#0f0"
		}else if(result==400){
			document.getElementById(cars[i]).style.backgroundColor = "#8B0000"
		}else{
			document.getElementById(cars[i]).style.backgroundColor = "#fadb2d"
		}
	}

    
}

setInterval(async () => {await timer()}, 10000);