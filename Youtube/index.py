from flask import *
from pytube import YouTube

app = Flask(__name__)  

@app.route('/Youtube', methods=['GET', 'POST'])
def Youtube_Downloaderd():
    URL = request.form.get("youtube-url")
    Format = request.form.get("File")
    print(URL)
    print(Format)
    try:
        yt = YouTube(URL)
        audio = yt.streams.filter(only_audio = True).first()
        yd = yt.streams.get_highest_resolution()
        if (Format == "MP4"):
            yd.download("X:/Dateien", filename=f"{yt.title}.mp4")
            name=yt.title+".mp4"
        else:
            audio.download("X:/Dateien", filename=f"{yt.title}.mp3")
            name=yt.title+".mp3"
    except:
        URL="https://www.youtube.com/watch?v=qnOySOYwmAY"
        Format="MP4" 
    try:
        return redirect("/Youtube-Downloader/"+name)
    except:
        return render_template('Youtube-Downloader.html')

@app.route('/Youtube/<name>')
def Youtube_Downloader_download(name):
    return send_file("X:/Dateien/"+name, as_attachment=True)