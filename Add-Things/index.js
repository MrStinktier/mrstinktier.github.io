let Add_Button = document.getElementById("Add-Button");
let adder = document.getElementById("adder");

Add_Button.addEventListener("click", function(event){
    adder.innerHTML += '<p>A new paragraph</p>';
});