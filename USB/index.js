document.addEventListener("click", function(event) {
	switch (event.target.id) {
	  	case "usbon":
			usb("on");
			break;
	  	case "usboff":
			usb("off");
			break;
	  	default:
			break;
	}
});

async function usb(status) {
    const res = await fetch(`https://backend.mr-stinktier.uk/usb?stat=${status}`);
    console.log(status);
	if(res.status == 200) {
        console.log("Worked");
    }else if(res.status == 400) {
        console.log("Something went wrong");
    }
}