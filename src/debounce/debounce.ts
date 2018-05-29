/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 */
export function Debounce(func: Function, wait: number, immediate: boolean): Function {
    let timeout: number;
	return function() {
        let context = this;
        let args: IArguments = arguments;
		let later: Function = () => {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow: boolean = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}