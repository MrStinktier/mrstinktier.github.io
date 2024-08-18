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
        case "desktopbuttonscollapse":
            if(statdropdown=="disabled"){
                document.getElementById('desktopbuttons').style.display = "flex";
                document.getElementById('desktopbuttonscollapse').innerHTML = "X";
                statdropdown = "enabled";
            }else if(statdropdown=="enabled"){
                document.getElementById('desktopbuttons').style.display = "none";
                document.getElementById('desktopbuttonscollapse').innerHTML = "+";
                statdropdown = "disabled";
            }
            break;
        case "raspybuttonscollapse":
            if(statdropdown2=="disabled"){
                document.getElementById('raspybuttons').style.display = "flex";
                document.getElementById('raspybuttonscollapse').innerHTML = "X";
                statdropdown2 = "enabled";
            }else if(statdropdown2=="enabled"){
                document.getElementById('raspybuttons').style.display = "none";
                document.getElementById('raspybuttonscollapse').innerHTML = "+";
                statdropdown2 = "disabled";
            }
            break;
        case "nasbuttonscollapse":
            if(statdropdown3=="disabled"){
                document.getElementById('nasbuttons').style.display = "flex";
                document.getElementById('nasbuttonscollapse').innerHTML = "X";
                statdropdown3 = "enabled";
            }else if(statdropdown3=="enabled"){
                document.getElementById('nasbuttons').style.display = "none";
                document.getElementById('nasbuttonscollapse').innerHTML = "+";
                statdropdown3 = "disabled";
            }
            break;
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
		}else if(result==300){
			document.getElementById(cars[i]).style.backgroundColor ="#8B0000"
		}
	}

    
}

setInterval(async () => {await timer()}, 10000);
