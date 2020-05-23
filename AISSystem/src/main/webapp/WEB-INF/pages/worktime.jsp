<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Work Time</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="js/worktime.js"></script>
</head>
<body>  
	<t:home>
		<h2 style="text-align:center; color:blue;">Employee Work Time List</h2>
		<div class="personal-list">
			<table id="table" class="hidden" border="1" cellpadding="8" cellspacing="1">
			    <tr>
			        <th>Employee ID</th>
			        <th>First Name</th>
	        		<th>Last Name</th>
	        		<th>Department</th>
	        		<th>Start Date</th>
	        		<th>End Date</th>
			    </tr>
			</table>
		</div>
	</t:home>
</body>
</html>