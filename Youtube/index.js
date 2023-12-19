let convertBtn = document.getElementById('submitButtonid');
let URLinput = document.querySelector('.youtube-url');
let select = document.querySelector('.File');
let serverURL = 'https://fuzzy-space-disco-979xp7rwxxrv277xg-4000.app.github.dev';

convertBtn.addEventListener('click', () => {
	if (!URLinput.value) {
		alert('Enter YouTube URL');
	} else {
		if (select.value == 'MP3') {
			downloadMp3(URLinput.value);
		} else if (select.value == 'MP4') {
			downloadMp4(URLinput.value);
		}
	}
});

async function downloadMp3(query) {
	//const res = await fetch(`${serverURL}/downloadmp3?url=${query}`);
	//if(res.status == 200) {
		try{
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp3?url=${query}`;
  		a.setAttribute('download', '');
		a.click();
		}catch{
			alert("Try Again")
		}
	//} else if(res.status == 400) {
	//	alert('Invalid url');
	//}
}

async function downloadMp4(query) {
	//const res = await fetch(`${serverURL}/downloadmp4?url=${query}`);
	//if(res.status == 200) {
		try{
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp4?url=${query}`;
  		a.setAttribute('download', '');
		a.click();
		}catch{
			alert("Try Again")
		}
	//} else if(res.status == 400) {
	//	alert('Invalid url');
	//}
}

async function checkServer() {
	const res = await fetch(`https://fuzzy-space-disco-979xp7rwxxrv277xg-4000.app.github.dev/test`);
	if(res.status == 200) {
		const statusDisplay = document.getElementById("status");
		statusDisplay.textContent = "The Server is Online";
		await Sleep(5000)
	} else if(res.status == 404) {
		const statusDisplay = document.getElementById("status");
		statusDisplay.textContent = "The Server is Offline";
		console.clear()
	}
}

while(true){
	setTimeout(checkServer(), 3000);
}
/*
const checkOnlineStatus = async () => {
	try {
	  const online = await fetch("https://fuzzy-space-disco-979xp7rwxxrv277xg-4000.app.github.dev/test");
	  return online.status >= 200 && online.status < 300; // either true or false
	} catch (err) {
	  return false; // definitely offline
	}
};

setInterval(async () => {
	const result = await checkOnlineStatus();
	const statusDisplay = document.getElementById("status");
	statusDisplay.textContent = result ? "The Server is Online" : "The Server is Offline";
}, 5000); // probably too often, try 30000 for every 30 seconds
*/