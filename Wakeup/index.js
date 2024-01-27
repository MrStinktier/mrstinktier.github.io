let button = document.getElementById("button")

button.addEventListener('click', () => {
    wakeup()
});

async function wakeup() {
    const res = await fetch(`https://backend.mr-stinktier.uk/Wakeup`/*`https://backend.mr-stinktier.uk/Wakeup?url=${query}`*/);
	if(res.status == 200) {
        console.log("Worked");
    }else if(res.status == 400) {
        console.log("Something went wrong");
    }
    return "https://web.parsec.app"
}