/**
 *	Raphael path
 * 	Copyright 2011 Guillaume Gautreau
 *	Licensed under the MIT License
 */
 
 (function(R){
 	function Path(paper){
 		this.paper = paper;
 		this.string = "";
 		
 		// toString overload
 		this.toString = function(){
 			return this.string;
 		}
 		
 		// Main method, for applying commands
 		this.command = function(){
 			if (arguments.length > 0){
 				this.string += arguments[0];
 				[].shift.apply(arguments, []);
 				this.string += [].join.apply(arguments, [","]);
 			}
 			
 			return this;
 		}
 		
 		// Draws the path
 		this.draw = function(){
 			return this.paper.path(this.toString());
 		}
 		
 	}
 	
 	// Raphael entry point
	R.fn.preparePath = function(){
		return new Path(this);
	}
 })(Raphael);