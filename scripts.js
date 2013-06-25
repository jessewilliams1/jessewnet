
window.onload = startUp;

function startUp() {
	
	// Getting DOM objects
	var intro = document.getElementById('intro');
	var interests = document.getElementById('interests');
	var work = document.getElementById('work');
	var past = document.getElementById('past');
	
	// Setting onmouseover
	intro.onmouseover = function() { this.className = 'menuItemOnHover' };
	interests.onmouseover = function() { this.className = 'menuItemOnHover' };
	work.onmouseover = function() { this.className = 'menuItemOnHover' };
	past.onmouseover = function() { this.className = 'menuItemOnHover' };
	
	// Setting onmouseout
	intro.onmouseout = function() { this.className = 'menuItemOffHover' };
	interests.onmouseout = function() { this.className = 'menuItemOffHover' };
	work.onmouseout = function() { this.className = 'menuItemOffHover' };
	past.onmouseout = function() { this.className = 'menuItemOffHover' };
	
	// Setting onclick
	intro.onclick = function() { setContent('intro') };
	interests.onclick = function() { setContent('interests') };
	work.onclick = function() { setContent('work') };
	past.onclick = function() { setContent('past') };
	
}

function setContent(content) {
	
	// Getting DOM objects
	var intro = document.getElementById('intro-content');
	var interests = document.getElementById('interests-content');
	var work = document.getElementById('work-content');
	var past = document.getElementById('past-content');

	if (content == 'intro') {
		intro.style.display = '';
		interests.style.display = 'none';
		work.style.display = 'none';
		past.style.display = 'none';
	}
	
	else if (content == 'interests') {
		interests.style.display = 'inline';
		intro.style.display = 'none';
		work.style.display = 'none';
		past.style.display = 'none';
	}
	
	else if (content == 'work') {
		work.style.display = 'inline';
		intro.style.display = 'none';
		interests.style.display = 'none';
		past.style.display = 'none';
	}
	
	else if (content == 'past') {
		past.style.display = 'inline';
		intro.style.display = 'none';
		interests.style.display = 'none';
		work.style.display = 'none';
	}
}