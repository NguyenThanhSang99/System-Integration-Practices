<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home page</title>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-latest.min.js"></script>
<link rel="stylesheet" href="css/home.css">
<script src='https://kit.fontawesome.com/a076d05399.js'></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="js/home.js"></script>

</head>
<body>	
	<div class="header">
		<div class="icon"><i class="fas fa-server"></i></div>
		<div class="title">DASHBOARD</div>
		<input type="text" class="search" name="search" placeholder="Search...">
		
		<div class="icon icon-search"><i class="fas fa-search"></i></div>
		<div class="icon"><i class="far fa-user-circle"></i></div>
	</div>
	<div class="menu_div">
    	<ul>
        <li id="active"><div class="icon-in-list"><i class="fas fa-users"></i></div><a href="${pageContext.request.contextPath}/employee">EMPLOYEE</a></li>
        <li><div class="icon-in-list"><i class="fas fa-user-clock"></i></div><a href="#">WORD TIME</a></li>
        <li><div class="icon-in-list"><i class="far fa-chart-bar"></i></div><a href="${pageContext.request.contextPath}/payrates">BENEFIT</a></li>
        <li><div class="icon-in-list"><i class="far fa-bell"></i></div><a href="#">NOTIFICATION</a></li>
       	</ul>
       	<div class="logout"><a href="${pageContext.request.contextPath}/logout">log out</a></div>
	</div>
	<div class="content">
		<div id="chartContainer" class="gender"></div>
		<div class="personal-list">
			<h1>Personal List</h1>
			<table id="table" class="hidden" border="1" cellpadding="8" cellspacing="1">
			    <tr>
			        <th>Employee ID</th>
	        		<th>First Name</th>
	        		<th>Last Name"</th>
	        		<th>Middle Initial</th>
	        		<th>Address1</th>
	        		<th>Address2</th>
	        		<th>City</th>
	        		<th>State</th>
	        		<th>Zip</th>
	        		<th>Email</th>
	        		<th>Phone Number</th>
	        		<th>Gender</th>
			    </tr>
			</table>
		</div>
	</div>
	<script src="js/canvasjs.min.js"></script>
	
</body>
</html>