$(function() {
    "use strict";

    var baseUrl = "http://jsonplaceholder.typicode.com/";
	$('#submit').click(function() {
        $("#posts").empty();
        $("#comments").empty();
        var info_path = 'users/'+$('#user').val();
		$.ajax({
			'url': baseUrl + info_path,
			'type': 'GET',
			'success': userSuccess,
			'error': ajaxFailure
        });
        
        var post_path = 'posts?userId='+$('#user').val();
        $.ajax({
			'url': baseUrl + post_path,
			'type': 'GET',
			'success': postSuccess,
			'error': ajaxFailure
        });
    });

    function ajaxFailure(xhr, status, exception) {
        console.log(xhr, status, exception);
    }

    function userSuccess(data) {
        console.log(data);
        $('#user_name').val(data.username);
        $('#user_email').val(data.email);
        var addr = data.address;
        $('#user_address').val(addr.suite + " " + addr.street + " " + addr.city);
        $('#zip_code').val(addr.zipcode);
    }

    function postSuccess(data) {
        console.log(data);
        $("#posts").empty();
        $("<tr><th>Id</th><th>Title</th><th>Content</th></tr>").prependTo("#posts");
        $.each(data, function(index, value){
            console.log(value.id, value.title, value.body);
            var row_data = `<tr><td>${value.id}</td><td>${value.title}</td><td>${value.body}</td><td>
                            <button id="p${value.id}">Show comments</button></td></tr>`;
            $('#posts tr:last').after(row_data);
        });
        var postTbl = document.getElementById('posts');
        var btnArr = postTbl.getElementsByTagName("button");
        for (var i=0; i< btnArr.length; i++) {
            btnArr[i].onclick = function() {
                var comment_path = 'comments?postId='+ this.id.substring(1);
                $.ajax({
                    'url': baseUrl + comment_path,
                    'type': 'GET',
                    'success': commentSuccess,
                    'error': ajaxFailure
                });
            };
        }
        var commentSuccess = function(data){
            console.log(data);
            $("#comments").empty();
            $("<tr><th>Id</th><th>Name</th><th>Content</th></tr>").prependTo("#comments");
            var commentTbl = document.getElementById('comments');
            $.each(data, function(index, value){
                console.log(value.id, value.name, value.email, value.body);
                var row_data = `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.email}</td><td>${value.body}</td></tr>`; 
                $('#comments tr:last').after(row_data);
            });
        };
    }
});
