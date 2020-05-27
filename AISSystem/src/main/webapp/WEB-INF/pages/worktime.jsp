<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Work Time</title>
<link rel="stylesheet" href="css/home.css">
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="css/bootstrap.min.css">
<script src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/worktime.js"></script>
</head>
<body>  
	<t:home>
		<div class="content">
			<div id="chartContainer" style="height: 400px; width: 100%;"></div>
			<div class="div-table">
				<table id="table" class="table hidden" border="1" cellpadding="8" cellspacing="1">
					<caption class="caption red">
            			<span><strong>Employee Work Time List</strong></span>
        			</caption>
					<thead class="thead-dark">
					    <tr>
					        <th>Employee ID</th>
					        <th>First Name</th>
			        		<th>Last Name</th>
			        		<th>Department</th>
			        		<th>Start Date</th>
			        		<th>End Date</th>
					    </tr>
				    </thead>
				</table>
			</div>
		</div>
		<script src="js/canvasjs.min.js"></script>
	</t:home>
</body>
</html>