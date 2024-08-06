
document.addEventListener('DOMContentLoaded', function() {
    document.body.innerHTML += "<div id='wrapper' style=' z-index:-1; width: 100%; height: 100%; position: absolute;'>\
                                    <div id='square1' style='top:12%; left:42%; position:absolute; height: 60px;width: 60px; border-radius: 25px; background-color: transparent; border: 6px solid rgba(255,255,255,08);'></div>\
                                    <div id='square2' style='top:70%; left:50%; position:absolute; height: 60px;width: 60px; border-radius: 25px; background-color: transparent; border: 6px solid rgba(255,255,255,08);'></div>\
                                    <div id='square3' style='top:17%; left:6%; position:absolute; height: 60px;width: 60px; border-radius: 25px; background-color: transparent; border: 6px solid rgba(255,255,255,08);'></div>\
                                    <div id='square4' style='top:20%; left:60%; position:absolute; height: 60px;width: 60px; border-radius: 25px; background-color: transparent; border: 6px solid rgba(255,255,255,08);'></div>\
                                    <div id='square5' style='top:67%; left:10%; position:absolute; height: 60px;width: 60px; border-radius: 25px; background-color: transparent; border: 6px solid rgba(255,255,255,08);'></div>\
                                    <div id='square6' style='top:80%; left:70%; position:absolute; height: 60px;width: 60px; border-radius: 25px; background-color: transparent; border: 6px solid rgba(255,255,255,08);'></div>\
                                    <div id='square7' style='top:60%; left:80%; position:absolute; height: 60px;width: 60px; border-radius: 25px; background-color: transparent; border: 6px solid rgba(255,255,255,08);'></div>\
                                    <div id='square8' style='top:32%; left:25%; position:absolute; height: 60px;width: 60px; border-radius: 25px; background-color: transparent; border: 6px solid rgba(255,255,255,08);'></div>\
                                    <div id='square9' style='top:90%; left:25%; position:absolute; height: 60px;width: 60px; border-radius: 25px; background-color: transparent; border: 6px solid rgba(255,255,255,08);'></div>\
                                    <div id='square10' style='top:20%; left:80%; position:absolute; height: 60px;width: 60px; border-radius: 25px; background-color: transparent; border: 6px solid rgba(255,255,255,08);'></div>\
                                </div>";
    document.getElementById("square1").animate([
        {transform: 'scale(0) translateY(0) rotate(0)', opacity:1},
        {transform: 'scale(1.3) translateY(-90px) rotate(360deg)', opacity:0}
    ],{
        duration: 10000,
        iterations: Infinity
    });
    document.getElementById("square2").animate([
        {transform: 'scale(0) translateY(0) rotate(0)', opacity:1},
        {transform: 'scale(1.3) translateY(-90px) rotate(360deg)', opacity:0}
    ],{
        duration: 7000,
        iterations: Infinity
    });
    document.getElementById("square3").animate([
        {transform: 'scale(0) translateY(0) rotate(0)', opacity:1},
        {transform: 'scale(1.3) translateY(-90px) rotate(360deg)', opacity:0}
    ],{
        duration: 9000,
        iterations: Infinity
    });
    document.getElementById("square4").animate([
        {transform: 'scale(0) translateY(0) rotate(0)', opacity:1},
        {transform: 'scale(1.3) translateY(-90px) rotate(360deg)', opacity:0}
    ],{
        duration: 10000,
        iterations: Infinity
    });
    document.getElementById("square5").animate([
        {transform: 'scale(0) translateY(0) rotate(0)', opacity:1},
        {transform: 'scale(1.3) translateY(-90px) rotate(360deg)', opacity:0}
    ],{
        duration: 6000,
        iterations: Infinity
    });
    document.getElementById("square6").animate([
        {transform: 'scale(0) translateY(0) rotate(0)', opacity:1},
        {transform: 'scale(1.3) translateY(-90px) rotate(360deg)', opacity:0}
    ],{
        duration: 12000,
        iterations: Infinity
    });
    document.getElementById("square7").animate([
        {transform: 'scale(0) translateY(0) rotate(0)', opacity:1},
        {transform: 'scale(1.3) translateY(-90px) rotate(360deg)', opacity:0}
    ],{
        duration: 15000,
        iterations: Infinity
    });
    document.getElementById("square8").animate([
        {transform: 'scale(0) translateY(0) rotate(0)', opacity:1},
        {transform: 'scale(1.3) translateY(-90px) rotate(360deg)', opacity:0}
    ],{
        duration: 12000,
        iterations: Infinity
    });
    document.getElementById("square9").animate([
        {transform: 'scale(0) translateY(0) rotate(0)', opacity:1},
        {transform: 'scale(1.3) translateY(-90px) rotate(360deg)', opacity:0}
    ],{
        duration: 9000,
        iterations: Infinity
    });
    document.getElementById("square10").animate([
        {transform: 'scale(0) translateY(0) rotate(0)', opacity:1},
        {transform: 'scale(1.3) translateY(-90px) rotate(360deg)', opacity:0}
    ],{
        duration: 5000,
        iterations: Infinity
    });
});