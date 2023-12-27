let name1_link = document.getElementsByClassName(".name1-link");
let name2_link = document.getElementsByClassName(".name2-link");
let name3_link = document.getElementsByClassName(".name3-link");
let name4_link = document.getElementsByClassName(".name4-link");
let name5_link = document.getElementsByClassName(".name5-link");

let name1_100_link = document.getElementsByClassName(".name1-100-link");
let name1_200_link = document.getElementsByClassName(".name1-200-link");
let name1_300_link = document.getElementsByClassName(".name1-300-link");
let name1_400_link = document.getElementsByClassName(".name1-400-link");
let name1_500_link = document.getElementsByClassName(".name1-500-link");

let name2_100_link = document.getElementsByClassName(".name2-100-link");
let name2_200_link = document.getElementsByClassName(".name2-200-link");
let name2_300_link = document.getElementsByClassName(".name2-300-link");
let name2_400_link = document.getElementsByClassName(".name2-400-link");
let name2_500_link = document.getElementsByClassName(".name2-500-link");

let name3_100_link = document.getElementsByClassName(".name3-100-link");
let name3_200_link = document.getElementsByClassName(".name3-200-link");
let name3_300_link = document.getElementsByClassName(".name3-300-link");
let name3_400_link = document.getElementsByClassName(".name3-400-link");
let name3_500_link = document.getElementsByClassName(".name3-500-link");

let name4_100_link = document.getElementsByClassName(".name4-100-link");
let name4_200_link = document.getElementsByClassName(".name4-200-link");
let name4_300_link = document.getElementsByClassName(".name4-300-link");
let name4_400_link = document.getElementsByClassName(".name4-400-link");
let name4_500_link = document.getElementsByClassName(".name4-500-link");

let name5_100_link = document.getElementsByClassName(".name5-100-link");
let name5_200_link = document.getElementsByClassName(".name5-200-link");
let name5_300_link = document.getElementsByClassName(".name5-300-link");
let name5_400_link = document.getElementsByClassName(".name5-400-link");
let name5_500_link = document.getElementsByClassName(".name5-500-link");

name1_100_link.addEventListener('click', () => {
    try{
		var a = document.createElement('a');
  		a.href = `https://www.google.com`;
		a.click();
	}catch{
		alert("Try Again")
	}
});