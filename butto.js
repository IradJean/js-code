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