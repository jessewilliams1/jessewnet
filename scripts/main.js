// onload calls an 'initialize' function to get around the
// quirk of only being able to call a single function onload.

window.onload = initialize;
window.onresize = setContentSize;

function initialize() {
	setContentSize();
	setMenuActions();
	getPosts('category', 'intro');
	getPosts('category', 'interests');
	getPosts('category', 'past');
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
	
	var twitterBox = document.getElementById('twitter-box');
	var linkedinBox = document.getElementById('linkedin-box');
	var githubBox = document.getElementById('github-box');
	twitterBox.onclick = function() { window.location.href = 'https://twitter.com/jessewnet'; };
	linkedinBox.onclick = function() { window.location.href = 'http://www.linkedin.com/pub/jesse-williams/49/b4b/b62'; };
	githubBox.onclick = function() { window.location.href = 'https://github.com/jessewilliams1'; };
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

function getPosts(criteria, value) {
	
	var url = 'https://api.mongohq.com/databases/blog/collections/posts/documents?_apikey=XXXXXXXXXXXX=' + criteria + ':' + value; // Your API key needs to be here 
	$.getJSON(url, function(response) {
		for (i in response) {
			var post = document.createElement('div');
			var postTitle = document.createElement('h2');
			var postAuthor = document.createElement('h3');
			var postCategory = document.createElement('h3');
			var postContent = document.createElement('p');
			
			var id = response[i]._id.$oid;
			var title = response[i].title;
			var author = response[i].author;
			var category = response[i].category;
			var content = response[i].content;

			post.id = id;
			post.className = category + '-post';
			
			postTitle.innerHTML = title;
			postAuthor.innerHTML = 'Posted by ' + author;
			postContent.innerHTML = content;

			post.appendChild(postTitle);
			post.appendChild(postAuthor);
			post.appendChild(postContent);
	
			document.getElementById(category + '-content').appendChild(post);
		}
	});
}