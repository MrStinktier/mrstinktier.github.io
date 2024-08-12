var desktopmac = "00:13:3b:0c:64:3f";
var nasmac = "a0:b3:cc:eb:0d:d3";

var statdropdown = "disabled";
var statdropdown2 = "disabled";
var statdropdown3 = "disabled";
var serverURL = "https://backend.mr-stinktier.uk"
var temp;

timer()

document.addEventListener("click", function(event) {
	switch (event.target.id) {
        case "desktopwakeup":
            usage(desktopmac);
            break;
        case "desktopshutdown":
            usage("desktopshutdown");
            break;
        case "desktopreboot":
            usage("desktopreboot");
            break;
        case "raspberrywakeup":
            usage("raspberrywakeup");
            break;
        case "raspygitpush":
            usage("raspberrygitpush");
            break;
        case "raspyshutdown":
            usage("raspyshutdown");
            break;
        case "raspyreboot":
            usage("raspyreboot");
            break;
        case "naswakeup":
            usage(nasmac);
            break;
        case "nasshutdown":
            usage("nasshutdown");
            break;
        case "nasreboot":
            usage("nasreboot");
        default:
            break;
    }
});

async function usage(status) {
    const res = await fetch(`${serverURL}/usage?stat=${status}`);
	if(res.status == 200) {
        console.log("Worked");
    }else if(res.status == 400) {
        console.log("Something went wrong");
    }
}

async function checkOnlineStatus(IP){
	try {
		const online = await fetch(`${serverURL}/testin?stat=${IP}`);
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
		}else if(result==301){
			document.getElementById(cars[i]).style.backgroundColor ="#8B0000"
		}
	}

    
}

setInterval(async () => {await timer()}, 10000);
