"use strict";

$(function() {
    var baseUrl = "http://jsonplaceholder.typicode.com/";
	$('#submit').click(function() {
		var info = 'users/'+$('#user').val();
		$.ajax({
			'url': baseUrl + info,
			'type': 'GET',
			'success': ajaxSuccess,
			'error': ajaxFailure
		});
    });
    function ajaxSuccess(data) {
        console.log(data);
        $('#user_name').val(data.username);
        $('#user_email').val(data.email);
        var addr = data.address;
        $('#user_address').val(addr.suite + addr.street + addr.city + addr.zipcode);
    }
    function ajaxFailure(xhr, status, exception) {
        console.log(xhr, status, exception);
    }
});





