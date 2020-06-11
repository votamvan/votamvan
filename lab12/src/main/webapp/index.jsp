<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<% if (session.getAttribute("user") == null) {
    response.sendRedirect("login.jsp");
} %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Assignment 13 - CS472</title>
<style>
body {
    background-color: linen;
}
strong {
    color: red;
}
</style>
</head>
<body>
    <div style="text-align: center">
        <h1>Assignment 13 - CS472</h1>
        <h2>Welcome <strong>${user.username}</strong></h2>
        <a href="/logout">Logout</a>
    </div>
</body>
</html>