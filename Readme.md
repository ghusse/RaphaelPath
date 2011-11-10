Raphael path
=============

Utility for [RaphaelJS](http://raphaeljs.com), that helps to draw paths.

Usage
-----

	var paper = Raphael(0, 0, 400, 400),
	// Create the path
		path = paper.preparePath();
	
	// Creates a path
	path.moveTo(20, 20)
		.lineTo(20, 380)
		.lineTo(380, 200)
		.close();
	
	// Draws the path
	path.draw();

API documentation
-----------------

TODO