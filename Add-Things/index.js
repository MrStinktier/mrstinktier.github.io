let Add_Button = document.getElementById("Add-Button");
let adder = document.getElementById("adder");
let popupWindow = document.getElementById("popup-div");
let popupButton = document.getElementById("popup-button");

Add_Button.addEventListener("click", function(event){
    event.preventDefault();
    popupWindow.style.display = "block";
});

popupButton.addEventListener("click", function(event){
    event.preventDefault();
    popupWindow.style.display = "none";
});

//adder.innerHTML += "hello"