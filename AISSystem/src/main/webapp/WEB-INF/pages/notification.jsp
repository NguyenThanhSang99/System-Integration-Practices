<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Notification</title>
<link rel="stylesheet" href="css/notification.css">
<script src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/notification.js"></script>
</head>
<body>
	<t:home>
		<div id="content" class="content">
			<h1>Notification List</h1>
			<c:if test="${not empty param.result}">
				<div class="${param.result}">
					${param.action } ${param.result }!!!
				</div>
			</c:if>
			<table id="table" class="hidden">
				<tbody>
					<c:forEach items="${employeeList}" var="emp" varStatus="loop">
					<tr>
						<td>${emp.employeeNumber}</td>
						<td>${emp.firstName}</td>
						<td>${emp.lastName}</td>
						<td>${emp.ssn}</td>
					</tr>
				</c:forEach>
				</tbody>
			</table>
			<div id="notification-list">
			</div>
		</div>
	</t:home>
</body>
</html>