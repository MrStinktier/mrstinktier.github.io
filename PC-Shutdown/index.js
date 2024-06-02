document.addEventListener("click", function(event) {
	switch (event.target.id) {
	  	case "shutdown":
			Shutdown("shutdown");
			break;
	  	case "reboot":
			Shutdown("reboot");
			break;
	  	default:
			break;
	}
});

async function Shutdown(status) {
    const res = await fetch(`https://backend.mr-stinktier.uk/shutdown?stat=${status}`);
    console.log(status);
	if(res.status == 200) {
        console.log("Worked");
    }else if(res.status == 400) {
        console.log("Something went wrong");
    }
}