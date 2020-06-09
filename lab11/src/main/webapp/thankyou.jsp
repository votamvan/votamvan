<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Thank you</title>
    </head>
    <body>
        <p>Thank you! <strong>${param.name}</strong> for contacting us.<br> 
    We should receive reply from us with in 24 hrs in your email address <strong>${param.email}</strong>.<br>
    Let us know in our support email <strong>${support_email}</strong> if you don’t receive reply within 24 hrs.<br> 
    Please be sure to attach your reference <strong>${support_ticket_id}</strong> in your email.
        </p>
    </body>
</html>
