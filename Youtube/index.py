#from flask import render_template, send_file, Flask
from pytube import YouTube
from pyscript import *
import urllib.request

#app = Flask(__name__)
def Youtube_Downloader():
#    URL = request.form.get("youtube-url")
#    Format = request.form.get("File")
#    print(URL)
#    print(Format)
    try:
        URL = "https://www.youtube.com/watch?v=OUoeZTJzcyY"
        Format = "MP4"
        yt = YouTube(str(URL))
        yd = yt.streams.get_highest_resolution()
        print(URL)
        print(Format)
        if (Format == "MP4"):
            yd.download("./Dateien", filename=f"{yt.title}.mp4")
            name=yt.title+".mp4"
            print(name)
        else:
            yd.download("./Dateien", filename=f"{yt.title}.mp3")
            name=yt.title+".mp3"
            print(name)
    except Exception as e:
        print(e)
#    try:
#        return redirect("/Youtube-Downloader/"+name)
#        return send_file("./Dateien/"+name, as_attachment=True)
#    except:
#        return render_template('./index.html')
    


#@app.route('/Youtube/<name>')
#def Youtube_Downloader_download(name):
    