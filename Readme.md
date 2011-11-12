Raphael path
=============

Copyright 2011 Guillaume Gautreau
Licensed under the MIT license

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

Method calls
------------

RaphaelPath provides different equivalent ways of calling path commands

	path.lineTo(10, 10)
		.lineTo(20, 10)
		.lineTo(20, 20);
	
	// Is equivalent to
	path.lineTo(10, 10, 20, 10, 20, 20);
	
	// And to
	path.lineTo([10, 10, 20, 10, 20, 20]);

API documentation
-----------------

* `path.draw()`
	* Draws the prepared path on its paper
	* Returns the actual SVG path element, on which raphael can be used.
* `path.command(command, [arg1], ...)`
	* Prepares a path command on the path. See [RaphaelJS documentation on paths](http://raphaeljs.com/reference.html#Paper.path)
	* Example: `path.command("M", 0, 0)` moves the current point to (0, 0)
	* `command` is the SVG path command, in one letter
	* `argx` are optional arguments for the given command
	* returns the prepared path object
* `path.toString()`
	* returns the path command string. You could use it for instance by doing `paper.path(path.toString())`.

### Commands
* `path.moveTo(x,y)`
* `path.lineTo(x,y)`
* `path.close()`
* `path.horizontal(x)`
* `path.vertical(y)`
* `path.curveTo(x1, y1, x2, y2, x, y)`
* `path.sCurveTo(x2, y2, x, y)`
* `path.qCurveTo(x1, y1, x, y)`
* `path.arcTo(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y)`
