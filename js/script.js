// This is how to make a comment
/*
Or multiple lines
*/
var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').classname;

	if (currentClassName == 'cool') {
		document.getElementById('cool').classname = 'cool red';
	} else {
		document.getElementById('cool').classname = 'cool';
	}
	
}

var car = {
	make: 'VW',
	type: 'Polo',
	color: 'blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: ['seat 1', 'seat 2', 'seat 3', 'seat 4'],
	turnOn: function () {
		this.isTurnedOn = true;
	},
	fly: function () {
		alert('fly');
	},
	switchCar: function (isOn) {
		console.log('turn car' +isOn);
		if (isOn = true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
			}
	}
};

console.log('Hello there Friends!');