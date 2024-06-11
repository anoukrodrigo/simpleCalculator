const dis = document.getElementById('dis');

function display(input) {
	dis.value += input;
}

function clear() {
	dis.value = "";
}

function calculate() {
	try {
		dis.value = eval(dis.value);
	}

	catch(error) {
		dis.value = "Error";
	}
}