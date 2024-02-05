let button = document.getElementById("button")

button.addEventListener('click', () => {
    wakeup()
});

async function wakeup() {
    var mac = "00:13:3b:0c:64:3f"
    const res = await fetch(`https://backend.mr-stinktier.uk/start?mac=${mac}`);
	if(res.status == 200) {
        console.log("Worked");
        location.replacer("https://web.parsec.app");
    }else if(res.status == 400) {
        console.log("Something went wrong");
    }
}