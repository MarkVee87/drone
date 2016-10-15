var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();

client
	.after(8000, function() {
		this.left(0.2);
	})	
	.after(2000, function() {
		this.stop();
	})
	.after(2000, function() {
		this.front(0.25);
	})	
	.after(2000, function() {
		this.stop();
	})
	.after(2000, function() {
		this.right(0.2);
	})
	.after(2000, function() {
		this.stop();
	})
	.after(2000, function() {
		this.back(0.25);
	})	
	.after(3000, function() {
		this.stop();
	})
	.after(3000, function() {
		this.land();
	});