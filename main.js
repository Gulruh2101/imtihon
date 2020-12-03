uzs.addEventListener('keyup', function (event) {
	let dollor = usd.value
	let sum = uzs.value
	if (event.keyCode == 13 && dollor && sum){
		display.textContent = "usd:" +(sum / dollor)
	}
})