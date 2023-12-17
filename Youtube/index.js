import * as cors from "cors";
import * as express from "express";
import * as ytdl from "ytdl-core";

const app = express();

let convertBtn = document.getElementById('submitButtonid');
let URLinput = document.querySelector('.youtube-url');
let select = document.querySelector('.File');
let serverURL = 'http://localhost:4000'

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

async function downloadMp3() {
	try {
		var url = URLinput.value;
		if(!ytdl.validateURL(url)) {
			return res.sendStatus(400);
		}

        let title = "audio";

		await ytdl.getBasicInfo(url, {
			format: 'mp4'
		}, (err, info) => {
			if (err) throw err;
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
		ytdl(url, {
			format: 'mp3',
			filter: 'audioonly',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
}

async function downloadMp4(query) {
	const res = await fetch(`${serverURL}/downloadmp4?url=${query}`);
	if(res.status == 200) {
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp4?url=${query}`;
  		a.setAttribute('download', '');
		a.click();
	} else if(res.status == 400) {
		alert('Invalid url');
	}
}