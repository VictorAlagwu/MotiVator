console.log(quotes);

	var random = Math.floor(Math.random() * 73);


	document.getElementById('id').innerHTML = quotes[random].name;
	document.getElementById('title').innerHTML = quotes[random].title;
	document.getElementById('desc').innerHTML = quotes[random].desc;

	var values = document.querySelectorAll('.value');
	var randValueIndex;
	var randValue;
	randValueIndex = 73;
	randValue = values[randValueIndex];
	document.body.classList.add('color-' + (randValueIndex + 1));