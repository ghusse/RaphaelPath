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
 		
 		// Registers a new path command
 		// Name: name of the command (public function name)
 		// Command: SVG path command (one letter)
 		// Args: number of arguments for this command
 		// FixedArgs: number of arguments that are not repeated when this command is chained
 		this.register = function(name, command, args, fixedArgs){
 			this[name] = function(){
 				// By default, function arguments are the same as command arguments
 				var commandArgs = arguments, fixed = fixedArgs || 0;
 				// But arguments can also be passed in an array
 				if (arguments.length == 1 && arguments[0] instanceof Array){
 					commandArgs = arguments[0];
 				}
 				
 				// Argument number verification, with support of chained commands
 				if (commandArgs.length == args 
 					|| (args > 0 && commandArgs.length >= args 
 						&& (commandArgs.length - fixed) % (args - fixed) == 0)) {
 					// SVG path command is added to arguments
 					[].reverse.apply(commandArgs, []);
 					[].push.apply(commandArgs, [command]);
 					[].reverse.apply(commandArgs, []);
 					this.command.apply(this, commandArgs);
 				} else {
 					throw "Incorrect number of arguments for command " + command;
 				}
 				
 				return this;
 			}
 		}
 		
 		this.register("moveTo", "M", 2);
 		this.register("lineTo", "L", 2);
 		this.register("close", "Z", 0);
 		this.register("horizontal", "H", 1);
 		this.register("vertical", "V", 1);
 		this.register("curveTo", "C", 6);
 		this.register("sCurveTo", "S", 4);
 		this.register("qCurveTo", "Q", 4);
 		this.register("sqCurveTo", "T", 2);
 		this.register("arcTo", "A", 7);
 		this.register("crCurveTo", "R", 4, 2);
 		
 	}
 	
 	// Raphael entry point
	R.fn.preparePath = function(){
		return new Path(this);
	}
 })(Raphael);