/**
 *	RaphaelPath unit tests
 */

module("RaphaelPath");

test("Entry point", function(){
		var paper = Raphael(0, 0, 100, 100),
			path = paper.preparePath();
		
		notEqual(typeof path, "undefined");
		notEqual(null, path);
});

// helper
function c(){
	return Raphael(0, 0, 100, 100).preparePath();
}

test("Empty toString", function(){
	strictEqual(c().toString(), "");
});

test("Command", function(){
	var path = c(),
		result = path.command("M", 2, 3);
	
	notEqual(typeof result, "undefined");
	notEqual(result, null);
	strictEqual(result.toString(), "M2,3");
});

test("Command with no args", function(){
	strictEqual(c().command("Z").toString(), "Z");
});

test("Empty command", function(){
	strictEqual(c().command().toString(), "");
});

test("Draw method", function(){
	var paper = Raphael(0, 0, 100, 100),
		path = paper.preparePath(),
		children = paper.canvas.childNodes.length,
		drawn =	path.command("M", 2, 2)
		.command("L", 10, 10)
		.draw();
	
	equal(paper.canvas.childNodes.length, children + 1);
	notEqual(typeof drawn, "undefined");
	notEqual(drawn, null);
	notEqual(drawn, path);
});


