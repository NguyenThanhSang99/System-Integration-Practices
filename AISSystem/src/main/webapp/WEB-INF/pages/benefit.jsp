<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Benefit</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="js/benefit.js"></script>
</head>
<body>  
	<t:home>
		<div id="chartContainer" style="height: 370px; width: 600px;"></div>
		<h2 style="text-align:center; color:blue;">PayRates LIST</h2>
		<table border="1" cellpadding="8" cellspacing="1">
			<tr>
	          <th>#</th>
	          <th>ID</th>
	          <th>PayRates Name</th>
	          <th>Values</th>
	          <th>Tax Percentage</th>
	          <th>Pay Type</th>
	          <th>Pay Amount</th>
	          <th>PT Level C</th>
			</tr>
			<c:forEach items="${payRatesList}" var="payrates" varStatus="loop">
	          <tr>
	            <td>${loop.index}</td>
	            <td>${payrates.idPayRates}</td>
	            <td>${payrates.payRateName}</td>
	            <td>${payrates.value}</td>
	            <td>${payrates.taxPercentage}</td>
	            <td>${payrates.payType}</td>
	            <td>${payrates.payAmount}</td>
	            <td>${payrates.ptLevelC}</td>
	          </tr>
			</c:forEach>
    	</table>
    	<script src="js/canvasjs.min.js"></script>
	</t:home>
</body>
</html>