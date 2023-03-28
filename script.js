//your JS code here. If required.
var nameElement = document.querySelector("#name");
var ageElement = document.querySelector("#age");
var btnElement = document.querSelector("#btn");
alert(btnElement);

function handleSubmit(e) {
	alert("test");
}

btnElement.addEventListener('click', handleSubmit);