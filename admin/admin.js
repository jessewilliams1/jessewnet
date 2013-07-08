window.onload = initialize;

function initialize() {
	var sumbitButton = document.getElementById('submitButton');
	submitButton.onclick = createPost;
}

function createPost() {
	var post = {
		document: {
			title: $('#titleInput').val(),
			author: $('#authorInput').val(),
			category: $('#categoryInput').val(),
			content: $('#contentInput').val()
			}};
	$.ajax({
		type: 'POST',
		url: 'https://api.mongohq.com/databases/blog/collections/posts/documents?_apikey=XXXXXXXXXXXXXXX', // Your API key here
		dataType: 'json',
		data: post, // message to send goes here
		success:function (data) { window.location = '../index.html'; }
	});
}