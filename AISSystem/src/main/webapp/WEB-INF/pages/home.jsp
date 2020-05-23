<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home page</title>
<link rel="stylesheet" href="css/home.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="js/home.js"></script>
</head>
<body>
	<t:home>
		<div class="content">
			<div id="chartContainer1" class="chart"></div>
			<div id="chartContainer2" class="chart"></div>
			<div class="personal-list">
				<table id="table" class="hidden" border="1" cellpadding="8" cellspacing="1">
				    <tr>
		        		<th>First Name</th>
		        		<th>Last Name</th>
		        		<th>Address1</th>
		        		<th>Address2</th>
		        		<th>City</th>
		        		<th>State</th>
		        		<th>SSN</th>
		        		<th>Email</th>
		        		<th>Phone Number</th>
		        		<th>Gender</th>
				    </tr>
				    <c:forEach items="${employeeList}" var="emp" varStatus="loop">
						<tr>
							  <td>${emp.firstName}</td>
							  <td>${emp.lastName}</td>
							  <td></td>
							  <td></td>
							  <td></td>
							  <td></td>
							  <td>${emp.ssn}</td>
							  <td></td>
							  <td></td>
							  <td></td>
						</tr>
					</c:forEach>
				</table>
			</div>
		</div>
	</t:home>
	<script src="js/canvasjs.min.js"></script>
</body>
</html>