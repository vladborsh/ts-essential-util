export function matchesSelector(el: Element, selector: string) {
    const p: Element = Element.prototype;
	const f: any = p.matches || p.webkitMatchesSelector || p.msMatchesSelector || ((s: string) => {
		return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
	});
	return f.call(el, selector);
}