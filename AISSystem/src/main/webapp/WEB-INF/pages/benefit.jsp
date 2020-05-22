<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Benefit</title>
</head>
<body>  
	<t:home>
		<h2 style="text-align:center; color:blue;">PayRates LIST</h2>
		<table border="1" cellpadding="8" cellspacing="1">
			<tr>
	          <th>#</th>
	          <th>ID</th>
	          <th>PayRates Name</th>
	          <th>Values</th>
			</tr>
			<c:forEach items="${payRatesList}" var="payrates" varStatus="loop">
	          <tr>
	            <td>${loop.index}</td>
	            <td>${payrates.idPayRates}</td>
	            <td>${payrates.payRateName}</td>
	            <td>${payrates.value}</td>
	          </tr>
			</c:forEach>
    	</table>
	</t:home>
</body>
</html>