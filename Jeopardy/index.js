async function disappear(){
    fetch("./jeopardy.txt")
    .then(function (res) {
        return res.text();
    })
    .then(function (data) {
		prints = data.split('\n');
		for (let i=0; i<prints.length; i++){
			if (i<31){
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

document.addEventListener("click", function(event) {
	switch (event.target.id) {
	  	case "1,1":
			disappear();
			break;
	  	case "1,2":
			disappear();
			break;
	  	case "1,3":
			disappear();
			break;
		case "1,4":
			disappear();
			break;
		case "1,5":
			disappear();
			break;
		case "2,1":
			disappear();
			break;
		case "2,2":
			disappear();
			break;
		case "2,3":
			disappear();
			break;
		case "2,4":
			disappear();
			break;
		case "2,5":
			disappear();
			break;
		case "3,1":
			disappear();
			break;
		case "3,2":
			disappear();
			break;
		case "3,3":
			disappear();
			break;
		case "3,4":
			disappear();
			break;
		case "3,5":
			disappear();
			break;
		case "4,1":
			disappear();
			break;
		case "4,2":
			disappear();
			break;
		case "4,3":
			disappear();
			break;
		case "4,4":
			disappear();
			break;
		case "4,5":
			disappear();
			break;
		case "5,1":
			disappear();
			break;
		case "5,2":
			disappear();
			break;
		case "5,3":
			disappear();
			break;
		case "5,4":
			disappear();
			break;
		case "5,5":
			disappear();
			break;
		case "6,2":
			appear()
			break;
		case "6,3":
			appear()
			break;
		case "6,4":
			appear()
			break;
		case "6,5":
			appear()
			break;
	  	default:
			break;
	}
  });