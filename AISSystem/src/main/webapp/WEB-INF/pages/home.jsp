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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="js/home.js"></script>

</head>
<body>
	<h1>Authors</h1>
	<p id="authors"></p>
	<div style="border:1px solid #ccc;text-align:right;padding:5px;">
   		<a href="${pageContext.request.contextPath}/employee">Employee List</a>
   		&nbsp;&nbsp;
   		<a href="${pageContext.request.contextPath}/payrates">PayRates List</a>
	</div>
	<div id="chartContainer" class = "gender"></div>
	<div>
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
        		<th>Drivers License</th>
        		<th>Marital Status</th>
        		<th>Gender</th>
		    </tr>
		</table>
	</div>
	
	<script src="js/canvasjs.min.js"></script>
	
</body>
</html>