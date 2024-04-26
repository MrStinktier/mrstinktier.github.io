document.addEventListener("click", function(event) {
	switch (event.target.id) {
	  	case "button":
			wakeup("00:13:3b:0c:64:3f");
			break;
	  	case "button2":
			wakeup("a0:b3:cc:eb:0d:d3");
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