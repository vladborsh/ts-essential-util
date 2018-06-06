# Essential TypeScript Functions

[![Build Status](https://travis-ci.org/vladborsh/ts-essential-util.svg?branch=master)](https://travis-ci.org/vladborsh/ts-essential-util)

Times have changed but there are still a few functions each developer should have in their arsenal, for performance for functional ease purposes.

## Features

* Debounce
* Poll
* Once
* GetAbsoluteUrl
* IsNative
* InsertRule
* MatchesSelector

## Description

### Debounce

For those of you who don't know what a debounce function does, it limits the rate at which a function can fire. A quick example:  you have a resize listener on the window which does some element dimension calculations and (possibly)  repositions a few elements.  That isn't a heavy task in itself but being repeatedly fired after numerous resizes will really slow your site down. 

``` javascript
const myEfficientFn = tu.debounce( () => {
    // All the stuff you do
}, 250);

window.addEventListener('resize', myEfficientFn);
```

### Poll

Polling with JavaScript is one of those ugly but important functions within advanced front-end user experience and testing practices.  Sometimes there isn't the event you can hook into to signify that a given task is complete, so you need to get your hands dirty and simply poll for it.  Polling with JavaScript isn't difficult but it's not easy either.

``` javascript
tu.poll( () => {
    return document.getElementById('lightbox').offsetWidth > 0;
}, 2000, 150).then( () => {
    // Polling done, now do something else!
}).catch( () => {
    // Polling timed out, handle the error!
});
```

### Once

Every so often you have a function which you only want to run once.  Oftentimes these functions are in the form of event listeners which may be difficult to manage.  Of course if they were easy to manage, you'd just remove the listeners but that's a perfect world and sometimes you simply want the ability to only allow a function to be called once. 

``` javascript
var canOnlyFireOnce = tu.once( () => {
    console.log('Fired!');
});

canOnlyFireOnce(); // "Fired!"
canOnlyFireOnce(); // no
```

### GetAbsoluteUrl

Dealing with URL formats can be a real nightmare.  Think of how just a few characters can effect a URL's absolute endpoint. No matter how you pass in the URL string, the URL will come out absolute.

``` javascript
tu.getAbsoluteUrl('/something'); // https://github.com/something
```

### IsNative

Every once a while I'll test is a given function is native code -- it's an important part of feature testing whether a function was provided by the browser or via a third party shim which acts like the native feature. 

``` javascript
tu.IsNative(alert); // true
tu.IsNative(myCustomFunction); // false
```

### InsertRule

Since we're using so much JavaScript in our web applications these days, we're looking for more ways to keep them fast. Another way we can make our pages efficient and fast is to dynamically add and remove styles directly to a stylesheet instead of constantly querying the DOM for elements and applying styles. This is especially useful when working on a dynamic, AJAX-heavy site.  If you set the style to a selector, you don't need to account for styling each element that may match that selector (now or in the future).

``` javascript
tu.insertRule("header { float: left; opacity: 0.8; }", 1);
```

### MatchesSelector

Oftentimes we validate input before moving forward; ensuring a truthy value, ensuring forms data is valid, etc.  But how often do we ensure an element qualifies for moving forward?

``` javascript
tu.matchesSelector(document.getElementById('myDiv'), 'div.someSelector[some-attribute=true]');
```

## Installation

Open terminal and run next commands

```sh
npm i
npm run webpack:watch
```

## Testing 

```sh
npm run test
```