const button = document.getElementById('button');
button.addEventListener('click', (function(){
	let count = 0;
	return function(){
		count += 1;
		if(count ===2){
			alert('this alert will appear on the rest clicks');
			count = 0;
		}
	};

})());
// my additions
const btn = document.getElementsByTagName('button');
function alertName(){
	alert("Hello!!");
}
alertName();

btn.addEventListener('onmouseover',alertName);
