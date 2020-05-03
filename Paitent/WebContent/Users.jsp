<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
	<%@ page import="javax.servlet.*"%>
<%@ page import="javax.servlet.http.*"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
	<%@ page import="model.Users" %>
	
	
	
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Patient Functionalities</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Users.js"></script>
</head>
<body>
<h1>User Management</h1>
	<form id="formUser" name="formUser" method="post" action="Users.jsp">
		User Name: 
		<input id="User_Name" name="User_Name" type="text" class="form-control form-control-sm" required> <br>
		User NIC:
		<input id="U_NIC" name="U_NIC" type="text" class="form-control form-control-sm" required><br> 
		User Age: 
		<input id="U_Age" name="U_Age" type="text" class="form-control form-control-sm" required><br>
		User Contact Number: 
		<input id="U_Contact_Number" name="U_Contact_Number" type="text" class="form-control form-control-sm" required><br>
		User Email: 
		<input id="U_Email" name="U_Email" type="text" class="form-control form-control-sm" required><br>
		User Address: 
		<input id="U_Address" name="U_Address" type="text" class="form-control form-control-sm" required><br>
		 
		<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary"> 
		<input type="hidden" id="hidUserIDSave" name="hidUserIDSave" value="">
	</form>
	<br>
	<div id = "alertSuccess" class="alert alert-success">
		<%
			out.print(session.getAttribute("statusMsg"));
		%>

	</div>
	<br>
	<div id="alertError" class="alert alert-danger"></div>
	<br>
	<%
		Users userObj = new Users();
	out.print(userObj.readUsers());
	%>
	

</body>
</html>