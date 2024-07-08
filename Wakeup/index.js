var statdropdown = "disabled";
var statdropdown2 = "disabled";
var statdropdown3 = "disabled";
var serverURL = "https://backend.mr-stinktier.uk"
var temp;

timer()

document.addEventListener("click", function(event) {
	switch (event.target.id) {
	  	case "button":
			wakeup("00:13:3b:0c:64:3f");
			break;
	  	case "button2":
			wakeup("a0:b3:cc:eb:0d:d3");
			break;
		case "shutdown":
		  	button("shutdown");
		  	break;
		case "reboot":
		  	button("reboot");
		  	break;
		case "shutdown-dropdown":
			if(statdropdown=="disabled"){
				document.getElementById('sh-dropdown-contents').style.display = "flex";
				document.getElementById('shutdown-dropdown').innerHTML = "X";
				statdropdown = "enabled";
			}else if(statdropdown=="enabled"){
				document.getElementById('sh-dropdown-contents').style.display = "none";
				document.getElementById('shutdown-dropdown').innerHTML = "+";
				statdropdown = "disabled";
			}
			break;
		case "shutdown-dropdown2":
			if(statdropdown2=="disabled"){
				document.getElementById('sh-dropdown-contents2').style.display = "flex";
				document.getElementById('shutdown-dropdown2').innerHTML = "X";
				statdropdown2 = "enabled";
			}else if(statdropdown2=="enabled"){
				document.getElementById('sh-dropdown-contents2').style.display = "none";
				document.getElementById('shutdown-dropdown2').innerHTML = "+";
				statdropdown2 = "disabled";
			}
			break;
		case "shutdown-dropdown3":
			if(statdropdown3=="disabled"){
				document.getElementById('sh-dropdown-contents3').style.display = "flex";
				document.getElementById('shutdown-dropdown3').innerHTML = "X";
				statdropdown3 = "enabled";
			}else if(statdropdown3=="enabled"){
				document.getElementById('sh-dropdown-contents3').style.display = "none";
				document.getElementById('shutdown-dropdown3').innerHTML = "+";
				statdropdown3 = "disabled";
			}
			break;
		case "usbaus":
			button("usboff");
			break;
		case "usban":
			button("usbon");
	    	break;
		case "raspi-reboot":
			button("raspi-reboot");
			break;
		case "git-push":
			button("git-push");
			break;
		case "proxmox-shutdown":
			button("proxmox-shutdown");
			break;
		case "proxmox-reboot":
			button("proxmox-reboot");
	  	default:
			break;
	}
  });

async function wakeup(mac) {
    const res = await fetch(`${serverURL}/start?mac=${mac}`);
	if(res.status == 200) {
        console.log("Worked");
    }else if(res.status == 400) {
        console.log("Something went wrong");
    }
}

async function button(status) {
    const res = await fetch(`https://backend.mr-stinktier.uk/button?stat=${status}`);
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
			document.getElementById("raspi-text-bottom").innerHTML = temp + "°C";
		}
		return online.status >= 200 && online.status < 300; // either true or false
  	} catch (err) {
		return false; // definitely offline
  	}
}

async function timer(){
	var cars = ["self", "192.168.115.66", "192.168.115.86"];

	for (let i = 0; i < cars.length; i++) {
		const result = await checkOnlineStatus(cars[i]);
		if(result==true){
			document.getElementById(cars[i]).style.backgroundColor = "#0f0"
		}else if(result==false){
			document.getElementById(cars[i]).style.backgroundColor ="#8B0000"
		}
	}
}

setInterval(async () => {await timer()}, 10000);
