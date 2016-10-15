var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();

client
	.after(2000, function() {
		this.front(0.2);
	})
	.after(2000, function() {
		this.stop();
	})
	.after(2000, function() {
		this.back(0.2);
	})	
	.after(1000, function() {
		this.stop();
	})
	.after(1000, function() {
		this.land();
	});