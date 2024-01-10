let name1_link = document.getElementById("0,1");
let name2_link = document.getElementById("0,2");
let name3_link = document.getElementById("0,3");
let name4_link = document.getElementById("0,4");
let name5_link = document.getElementById("0,5");

let name1_100_link = document.getElementById("1,1");
let name2_100_link = document.getElementById("1,2");
let name3_100_link = document.getElementById("1,3");
let name4_100_link = document.getElementById("1,4");
let name5_100_link = document.getElementById("1,5");

let name1_200_link = document.getElementById("2,1");
let name2_200_link = document.getElementById("2,2");
let name3_200_link = document.getElementById("2,3");
let name4_200_link = document.getElementById("2,4");
let name5_200_link = document.getElementById("2,5");

let name1_300_link = document.getElementById("3,1");
let name2_300_link = document.getElementById("3,2");
let name3_300_link = document.getElementById("3,3");
let name4_300_link = document.getElementById("3,4");
let name5_300_link = document.getElementById("3,5");

let name1_400_link = document.getElementById("4,1");
let name2_400_link = document.getElementById("4,2");
let name3_400_link = document.getElementById("4,3");
let name4_400_link = document.getElementById("4,4");
let name5_400_link = document.getElementById("4,5");

let name1_500_link = document.getElementById("5,1");
let name2_500_link = document.getElementById("5,2");
let name3_500_link = document.getElementById("5,3");
let name4_500_link = document.getElementById("5,4");
let name5_500_link = document.getElementById("5,5");

let answer1 = document.getElementById("6,2");
let answer2 = document.getElementById("6,3");
let answer3 = document.getElementById("6,4");
let answer4 = document.getElementById("6,5");

let newButton = document.getElementById("7,0");

async function disappear(){
    fetch("./jeopardy.txt")
    .then(function (res) {
        return res.text();
    })
    .then(function (data) {
		prints = data.split('\n');
		for (let i=0; i<prints.length; i++){
			if (i<=30){
            	document.getElementById(prints[i]).style.visibility="hidden";
			}else if (i>30){
				document.getElementById(prints[i]).style.visibility="visible";
			}
		}
    });
}

async function appear(){
    fetch("./jeopardy.txt")
    .then(function (res) {
        return res.text();
    })
    .then(function (data) {
		prints = data.split('\n');
		for (let i=0; i<prints.length; i++){
			if (i<=30){
            	document.getElementById(prints[i]).style.visibility="visible";
			}else if (i>30){
				document.getElementById(prints[i]).style.visibility="hidden";
			}
		}
    });
}

name1_100_link.addEventListener('click', () => {
    disappear()
});

name2_100_link.addEventListener('click', () => {
	disappear()
});

name3_100_link.addEventListener('click', () => {
	disappear()
});

name4_100_link.addEventListener('click', () => {
	disappear()
});

name5_100_link.addEventListener('click', () => {
	disappear()
});

name1_200_link.addEventListener('click', () => {
	disappear()
});

name2_200_link.addEventListener('click', () => {
	disappear()
});

name3_200_link.addEventListener('click', () => {
	disappear()
});

name4_200_link.addEventListener('click', () => {
	disappear()
});

name5_200_link.addEventListener('click', () => {
	disappear()
});

name1_300_link.addEventListener('click', () => {
	disappear()
});

name2_300_link.addEventListener('click', () => {
	disappear()
});

name3_300_link.addEventListener('click', () => {
	disappear()
});

name4_300_link.addEventListener('click', () => {
	disappear()
});

name5_300_link.addEventListener('click', () => {
	disappear()
});

name1_400_link.addEventListener('click', () => {
	disappear()
});

name2_400_link.addEventListener('click', () => {
	disappear()
});

name3_400_link.addEventListener('click', () => {
	disappear()
});

name4_400_link.addEventListener('click', () => {
	disappear()
});

name5_400_link.addEventListener('click', () => {
	disappear()
});

name1_500_link.addEventListener('click', () => {
	disappear()
});

name2_500_link.addEventListener('click', () => {
	disappear()
});

name3_500_link.addEventListener('click', () => {
	disappear()
});

name4_500_link.addEventListener('click', () => {
	disappear()
});

name5_500_link.addEventListener('click', () => {
	disappear()
});

answer1.addEventListener('click', () => {
	appear()
});

answer2.addEventListener('click', () => {
	appear()
});

answer3.addEventListener('click', () => {
	appear()
});

answer4.addEventListener('click', () => {
	appear()
});