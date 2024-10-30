var statdropdown = "disabled";
var statdropdown2 = "disabled";
var statdropdown3 = "disabled";
var serverURL = "https://backend.mr-stinktier.uk"
var wakeuppressed = false;
var temp;

if(wakeuppressed){
    print(document.getElementById("192.168.115.101").style.backgroundColor);
    if(document.getElementById("192.168.115.101").style.backgroundColor == "#0f0"){
        window.location.href = "parsec://";
        wakeuppressed = false;
    }
}

document.addEventListener("click", async function(event) {
	switch (event.target.id) {
        case "desktopwakeup":
            if(usage("desktop", "wakeup")){
                wakeuppressed = true;
            }
            while(wakeuppressed){
                if(await checkOnlineStatus("192.168.115.101") == "200"){
                    window.location.href = "parsec://DESKTOP-VCS1UEK";
                    wakeuppressed = false;
                }
            }
            break;
        case "desktopshutdown":
            usage("desktop", "shutdown");
            break;
        case "desktopreboot":
            usage("desktop","reboot");
            break;
        case "raspyreboot":
            usage("raspberry", "reboot");
            break;
        case "raspygitpush":
            usage("raspberry", "gitpush");
            break;
        case "raspyusbon":
            usage("raspberry", "usbon");
            break;
        case "raspyusboff":
            usage("raspberry", "usboff");
            break;
        case "naswakeup":
            usage("nas", "wakeup");
            break;
        case "nasshutdown":
            usage("nas", "shutdown");
            break;
        case "nasreboot":
            usage("nas", "reboot");
            break;
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

async function usage(id, status) {
    const res = await fetch(`${serverURL}/usage?id=${id}&stat=${status}`);
	if(res.status == 200) {
        console.log("Worked");
        return true;
    }else if(res.status == 400) {
        console.log("Something went wrong");
        return false;
    }
}