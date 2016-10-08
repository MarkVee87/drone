var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();

client
	.after(3000, function() {
		this.clockwise(0.8);
	})	
	.after(3000, function() {
		this.stop();
	})
	.after(3000, function() {
		this.counterClockwise(0.8);
	})	
	.after(3000, function() {
		this.stop();
	})
	.after(3000, function() {
		this.land();
	});