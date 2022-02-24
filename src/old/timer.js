let czas = 50;
let czas2 = 25;
let pozCzas = 0;
let timerId;
function start() {
	reset();
	pozCzas = czas;
	timerId = setInterval(count, 1000);
	updateDisplay()
}
function start2() {
	reset();
	pozCzas = czas2;
	timerId = setInterval(count, 1000);
	updateDisplay()
}
function count() {
	--pozCzas;
		if (pozCzas === 0){
			stop();
	}
		updateDisplay();

	}
function stop(){
	clearInterval(timerId);
}
function reset() {
	stop();
	timerId = null;
	pozCzas = 0;
	updateDisplay();
}
function updateDisplay() {
	document.getElementById("timerDisplay").innerHTML = pozCzas;
}