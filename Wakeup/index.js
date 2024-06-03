var statdropdown = "disabled";

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
				this.getElementById("sh-dropdown-contents").style.display = "flex";
				statdropdown = "enabled";
			}else if(statdropdown=="enabled"){
				this.getElementById("sh-dropdown-contents").style.display = "none";
				statdropdown = "disabled";
			}
			break;
	  	default:
			break;
	}
  });

async function wakeup(mac) {
    const res = await fetch(`https://backend.mr-stinktier.uk/start?mac=${mac}`);
    console.log(mac);
	if(res.status == 200) {
        console.log("Worked");
    }else if(res.status == 400) {
        console.log("Something went wrong");
    }
}

async function Shutdown(status) {
    const res = await fetch(`https://backend.mr-stinktier.uk/shutdown?stat=${status}`);
    console.log(status);
	if(res.status == 200) {
        console.log("Worked");
    }else if(res.status == 400) {
        console.log("Something went wrong");
    }
}