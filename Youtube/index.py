from __future__ import unicode_literals
#from flask import render_template, send_file, Flask
from pytube import YouTube
from pyscript import *
#import urllib.request
import youtube_dl

#app = Flask(__name__)
def Youtube_Downloader():

    #class MyLogger(object):
    #    def debug(self, msg):
    #        pass

    #    def warning(self, msg):
    #        pass

    #    def error(self, msg):
    #        print(msg)

    #ydl_opts = {
    #'format': 'bestaudio/best',
    #'postprocessors': [{
    #    'key': 'FFmpegExtractAudio',
    #    'preferredcodec': 'mp3',
    #    'preferredquality': '192',
    #}],
    #'logger': MyLogger(),
    #}

    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        ydl.download(['https://www.youtube.com/watch?v=BaW_jenozKc'])
#    URL = request.form.get("youtube-url")
#    Format = request.form.get("File")
#    print(URL)
#    print(Format)
    #try:
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
    #except Exception as e:
    #    print(e)
#    try:
#        return redirect("/Youtube-Downloader/"+name)
#        return send_file("./Dateien/"+name, as_attachment=True)
#    except:
#        return render_template('./index.html')
    


#@app.route('/Youtube/<name>')
#def Youtube_Downloader_download(name):
    