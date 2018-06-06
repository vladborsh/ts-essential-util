export function once(fn: Function, context: any): Function {
    let result: Function;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}