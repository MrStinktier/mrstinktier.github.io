document.addEventListener("click", function(event) {
	switch (event.target.id) {
	  	case "submitbutton":
			download(document.getElementById('textinput').value, document.querySelector('.File').value);
			break;
	  	default:
			break;
	}
  });

function download(url, format) {
    var a = document.createElement('a');
    a.href = `https://backend.mr-stinktier.uk/download?url=${url}&format=${format}`;
    a.setAttribute('download', '');
    a.click();
}