let convertBtn = document.getElementById('submitButtonid');
let URLinput = document.querySelector('.youtube-url');
let select = document.querySelector('.File');
let serverURL = 'https://fuzzy-space-disco-979xp7rwxxrv277xg-4000.app.github.dev';
const times = "10";
const delay = "10"

window.addEventListener('online', chk)

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

async function chk(event, serverURL, times, delay) {
    return new Promise((res, rej) => {                       // return a promise

        (function rec(i) {                                   // recursive IIFE
            fetch(serverURL, {mode: 'no-cors'}).then((r) => {   // fetch the resourse
                res(r);   
				var a = document.createElement('a');
  				a.href = `www.google.com`;
  				a.setAttribute('link', '');
				a.click();                                   // resolve promise if success
            }).catch( err => {
                if (times === 0)                             // if number of tries reached
                    return rej(err);                         // don't try again

                setTimeout(() => rec(--times), delay )       // otherwise, wait and try 
            });                                              // again until no more tries
        })(times);

    });
}