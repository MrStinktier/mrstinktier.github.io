var statdropdown = "disabled";
var serverURL = "https://backend.mr-stinktier.uk"

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
		  	Shutdown("shutdown");
		  	break;
		case "reboot":
		  	Shutdown("reboot");
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
	  	default:
			break;
	}
  });

async function wakeup(mac) {
    const res = await fetch(`${serverURL}/start?mac=${mac}`);
    console.log(mac);
	if(res.status == 200) {
        console.log("Worked");
    }else if(res.status == 400) {
        console.log("Something went wrong");
    }
}

async function Shutdown(status) {
    const res = await fetch(`${serverURL}/shutdown?stat=${status}`);
    console.log(status);
	if(res.status == 200) {
        console.log("Worked");
    }else if(res.status == 400) {
        console.log("Something went wrong");
    }
}

/*const checkOnlineStatus = async () => {
	try {
	  	const online = await fetch(`${serverURL}/testin`);
	  	return online.status >= 200 && online.status < 300; // either true or false
	} catch (err) {
	  	return false; // definitely offline
	}
};*/

async function checkOnlineStatus(IP){
	try {
		const online = await fetch(`${serverURL}/testin?stat=${IP}`);
		return online.status >= 200 && online.status < 300; // either true or false
  	} catch (err) {
		return false; // definitely offline
  	}
}

async function timer(){
	const netstatdesktop = document.getElementById("netstat");
	const netstattruenas = document.getElementById("netstat2");
	const result1 = await checkOnlineStatus("192.168.115.66");
	const result2 = await checkOnlineStatus("192.168.115.154");
	console.log(result1);
	console.log(result2);
	if(result1==true){
		netstatdesktop.style.backgroundColor = "#0f0"
	}else if(result1==false){
		netstatdesktop.style.backgroundColor = "#8B0000"
	}

	if(result2==true){
		netstattruenas.style.backgroundColor = "#0f0"
	}else if(result2==false){
		netstattruenas.style.backgroundColor = "#8B0000"
	}
	console.clear()
}

setInterval(async () => {await timer()}, 10000);