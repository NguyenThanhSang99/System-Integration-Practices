<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Benefit</title>
<link rel="stylesheet" href="css/home.css">
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="css/bootstrap.min.css">
<script src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/benefit.js"></script>
</head>
<body>  
	<t:home>
		<div class="content">
			<div id="chartContainer" class="chart"></div>
			<div id="chartContainer2" class="chart"></div>
			<div class = "div-table">
				<table class="table" border="1" cellpadding="8" cellspacing="1">
					<caption class="caption green">
            			<span><strong>PayRates List</strong></span>
        			</caption>
					<thead class="thead-dark">
						<tr>
							<th>ID</th>
							<th>PayRates Name</th>
							<th>Values</th>
							<th>Tax Percentage</th>
							<th>Pay Type</th>
							<th>Pay Amount</th>
							<th>PT Level C</th>
						</tr>	
					</thead>
					<tbody>
						<c:forEach items="${payRatesList}" var="payrates" varStatus="loop">
				          <tr>
				            <td>${payrates.idPayRates}</td>
				            <td>${payrates.payRateName}</td>
				            <td>${payrates.value}</td>
				            <td>${payrates.taxPercentage}</td>
				            <td>${payrates.payType}</td>
				            <td>${payrates.payAmount}</td>
				            <td>${payrates.ptLevelC}</td>
				          </tr>
						</c:forEach>
					</tbody>
		    	</table>
			</div>
			<div class = "table-benefit">
				
				<table id="table" class="table" border="1" cellpadding="8" cellspacing="1">
					<caption class="caption blue">
            			<span><strong>Benefit Plans List</strong></span>
        			</caption>
					<thead class="thead-dark">
						<tr>
							<th>Plan Name</th>
							<th>Deductable</th>
							<th>Percentage CoPay</th>
						</tr>	
					</thead>
		    	</table>
			</div>
		</div>
		<script src="js/canvasjs.min.js"></script>
	</t:home>
</body>
</html>