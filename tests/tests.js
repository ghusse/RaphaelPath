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

var u = "undefined";

test("Empty toString", function(){
	strictEqual(c().toString(), "");
});

test("Command", function(){
	var path = c(),
		result = path.command("M", 2, 3);
	
	strictEqual(result, path);
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
	notEqual(typeof drawn, u);
	notEqual(drawn, null);
	notEqual(drawn, path);
});

test("Move", function(){
	var path = c();
	
	strictEqual(path.moveTo(1, 2), path);
	strictEqual(path.toString(), "M1,2");
});

test("Move with incorrect number of arguments", function(){
	raises(function(){c().moveTo(1, 2, 3)}, "Incorrect number of arguments for command M");
});

test("Chained move", function(){
	strictEqual(c().moveTo(1,2,3,4).toString(), "M1,2,3,4");	
});

test("Move with array of arguments, chained", function(){
	strictEqual(c().moveTo([1,2,3,4]).toString(), "M1,2,3,4");
});

test("Line", function(){
	var path = c();
	
	strictEqual(path.lineTo(1, 2), path);
	strictEqual(path.toString(), "L1,2");
});

test("Close", function(){
	strictEqual(c().close().toString(), "Z");
});

test("Horizontal line", function(){
	strictEqual(c().horizontal(10).toString(), "H10");
});

test("Vertical line", function(){
	strictEqual(c().vertical(20).toString(), "V20");
});

test("Curve", function(){
	strictEqual(c().curveTo(1, 2, 3, 4, 5, 6).toString(), "C1,2,3,4,5,6");
});

test("Smooth curve", function(){
	strictEqual(c().sCurveTo(1, 2, 3, 4).toString(), "S1,2,3,4");
});

test("Quadratic Bézier curve", function(){
	strictEqual(c().qCurveTo(1, 2, 3, 4).toString(), "Q1,2,3,4");
});

test("Smooth quadratic Bézier curve", function(){
	strictEqual(c().sqCurveTo(1, 2).toString(), "T1,2");
});

test("Arc", function(){
	strictEqual(c().arcTo(1, 2, 3, 4, 5, 6, 7).toString(), "A1,2,3,4,5,6,7");
});

test("Catmull Rom curve", function(){
	strictEqual(c().crCurveTo(1, 2, 3, 4).toString(), "R1,2,3,4");
	strictEqual(c().crCurveTo(1, 2, 3, 4, 5, 6).toString(), "R1,2,3,4,5,6");
	strictEqual(c().crCurveTo([1, 2, 3, 4, 5, 6]).toString(), "R1,2,3,4,5,6");
	
	raises(function(){c().crCurveTo(1, 2)}, "Incorrect number of arguments for command R");
});



