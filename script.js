const form = document.getElementById('form');
const url = document.getElementById('url');
const name = document.getElementById('name');
const year = document.getElementById('year');
const BASEURL = "https://localhost:8080/";

form.addEventListener('submit', function(e){
	e.preventDefault();
	url.textContent = "";
	if(name.value.trim() !== "" && year.value.trim() !== ""){
		url.textContent = `${BASEURL}?name=${name.value}&year=${year.value}`;
	}
	else if(name.value.trim() !== "" ){
		url.textContent = `${BASEURL}?name=${name.value}`;
	}
	else if(year.value.trim() !== ""){
		url.textContent = `${BASEURL}?year=${year.value}`;
	}
	else{
		url.textContent = `${BASEURL}`;
	}
})