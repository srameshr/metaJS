(function() {
	"use strict";

	var myObject = {
		name: "John"
	};


	// This is the basic implementaion.
	var proxy = new Proxy(myObject, {
		get: function(target, property) {
			if(property in target) {
				return target[property]
			}
			else {
				throw new ReferenceError("Property \"" + property + "\" does not exist.");
			}
		}
	});

	// Make it more generic
	function proxiedObj(targetObj) {
		return new Proxy(targetObj, {
			get: function(targetObj, property) {
				if(property in targetObj) {
					return targetObj[property]
				}
				else {
					throw new ReferenceError("Property " + property + " does not exist.");
				}
			}
		});
	}

	var person = proxiedObj( {
    		name: "John"
		});
	person.name // John
	person.yahooo // Error!!!

})();