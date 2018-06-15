const cat = document.getElementById("cat");
const counter = document.getElementById("counter");

let clicks = 0;
let isAnimating = false;

function animation(){
	if(!isAnimating){
		isAnimating = true;
		cat.classList.toggle('clicked');
		clicks++;
		counter.textContent = clicks;
		setTimeout(function(){
			cat.classList.toggle('clicked');
			isAnimating = false;
		}, 200);
	}
}

cat.addEventListener('click', animation, false);