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
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="css/bootstrap.min.css">
<script src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/home.js"></script>
</head>
<body>
	<t:home>
		<div class="content">
			<div id="chartContainer1" class="chart"></div>
			<div id="chartContainer2" class="chart"></div>
			<div class="div-table">
				<table id="table" class="table hidden" border="1" cellpadding="8" cellspacing="1">
					<caption class="caption blue">
            			<span><strong>Personal List</strong></span>
            			<span class="addEmployee">
            				Create employee
            				<a href="${pageContext.request.contextPath}/createNewEmployee" ><i class="fas fa-user-plus green icon-emp"></i></a>
            			</span>
        			</caption>
					<thead class="thead-dark">
						<tr>
			        		<th scope="col">First Name</th>
			        		<th scope="col">Last Name</th>
			        		<th scope="col">Address1</th>
			        		<th scope="col">City</th>
			        		<th scope="col">State</th>
			        		<th scope="col">SSN</th>
			        		<th scope="col">Email</th>
			        		<th scope="col">Phone Number</th>
			        		<th scope="col">Gender</th>
			        		<th>Update</th>
			        		<th>Delete</th>
					    </tr>
					</thead>
					<tbody>
						<c:forEach items="${employeeList}" var="emp" varStatus="loop">
						<tr>
							  <td>${emp.firstName}</td>
							  <td>${emp.lastName}</td>
							  <td></td>
							  <td></td>
							  <td></td>
							  <td>${emp.ssn}</td>
							  <td></td>
							  <td></td>
							  <td></td>
							  <td onclick="updateEmployee(${emp.employeeNumber}, ${emp.idEmployee })"><i class="fas fa-user-edit blue icon-emp"></i></td>
							  <td onclick="deleteEmployee(${emp.employeeNumber}, ${emp.idEmployee }, '${emp.firstName }', '${emp.lastName }')"><i class="fas fa-user-minus red icon-emp"></i></td>
						</tr>
					</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</t:home>
	<script src="js/canvasjs.min.js"></script>
	
</body>
</html>