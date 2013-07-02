// onload calls an 'initialize' function to get around the
// quirk of only being able to call a single function onload.

window.onload = initialize;
window.onresize = setContentSize;

function initialize() {
	//test();
	setContentSize();
	setMenuActions();
}

function test() {
	var h = document.getElementById('test').offsetHeight;
	var w = document.getElementById('test').offsetWidth;	
	alert('Height: ' + h + 'Width: ' + w);
}

// Gets the size of various fixed and dynamic elements and computes the height
// of the center content... in order to make page responsive to various browsers,
// resolutions, devices, etc..
function setContentSize() {
	var windowHeight = window.innerHeight;
	var headerHeight = document.getElementById('header').offsetHeight;
	var menuHeight = document.getElementById('menu').offsetHeight;
	var footerHeight = document.getElementById('footer').offsetHeight;
	var total = headerHeight + menuHeight + footerHeight;
	var content = document.getElementById('content');
	content.style.height = (windowHeight - total) + 'px';
}

// The mouse events are assigned here to keep them out of the html.
// Additionally, the 'hover' styles are assigned dynamically by onmouseover
// and onmouseout events to allow for better control of the CSS animation.
// 
// The exact reasoning is that in order to have animation when an element
// loses hover, you need to use the CSS :not(:hover) selector, which executes the
// classes animation upon page load (not desired).
function setMenuActions() {

	var leftItems = document.getElementsByClassName('menu-item-left-default');
	for (var i in leftItems) {
		leftItems[i].onmouseover = function() { this.className = 'menu-item-left-onhover'; };
		leftItems[i].onmouseout = function() { this.className = 'menu-item-left-offhover'; };
	}
	
	var rightItems = document.getElementsByClassName('menu-item-right-default');
	for (var i in rightItems) {
		rightItems[i].onmouseover = function() { this.className = 'menu-item-right-onhover'; };
		rightItems[i].onmouseout = function() { this.className = 'menu-item-right-offhover'; };
	}
	
	// Next, assigned onclick actions for elements individually
	var intro = document.getElementById('intro');
	var interests = document.getElementById('interests');
	var past = document.getElementById('past');
	intro.onclick = function() { setContent('intro-content'); };
	interests.onclick = function() { setContent('interests-content'); };
	past.onclick = function() { setContent('past-content'); };
}


// Changes the content in the center by hiding the 'current' content, and displaying
// The one corresponding to what is being clicked
function setContent(contentDivId) {

	var introContent = document.getElementById('intro-content');
	var interestsContent = document.getElementById('interests-content');
	var pastContent = document.getElementById('past-content');
	
	if (contentDivId == 'intro-content') {
		introContent.style.display = 'inline';
		interestsContent.style.display = 'none';
		pastContent.style.display = 'none';
		
	} else if (contentDivId == 'interests-content') {
		interestsContent.style.display = 'inline';
		introContent.style.display = 'none';
		pastContent.style.display = 'none';
		
	} else if (contentDivId == 'past-content') {
		pastContent.style.display = 'inline';
		introContent.style.display = 'none';
		interestsContent.style.display = 'none';
	}
}