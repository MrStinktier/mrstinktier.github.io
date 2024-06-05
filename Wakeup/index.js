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
				//document.getElementById('sh-dropdown-contents').className = 'clicked';
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

const callback = () => {
	document.getElementById('sh-dropdown-contents').classList.add("clicked");
};
  
  /* add event listener */
  document.getElementById('shutdown-dropdown').addEventListener("click", callback);

/*getElementById('shutdown-dropdown').on('click',function(){
	getElementById('sh-dropdown-contents').classList.add('clicked');
});*/

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