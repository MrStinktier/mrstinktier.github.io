let button = document.getElementById("button")

button.addEventListener('click', () => {
    wakeup()
});

async function wakeup() {
<<<<<<< HEAD
    const res = await fetch(`https://backend.mr-stinktier.uk/Wakeup`/*`https://backend.mr-stinktier.uk/Wakeup?url=${query}`*/);
=======
    var mac = "00:13:3b:0c:64:3f"
    const res = await fetch(`https://backend.mr-stinktier.uk/start?mac=${mac}`);
>>>>>>> 3c2de375004b2b31f0f67043d92a7efb3a61ad8d
	if(res.status == 200) {
        console.log("Worked");
        location.replacer("https://web.parsec.app");
    }else if(res.status == 400) {
        console.log("Something went wrong");
    }
}