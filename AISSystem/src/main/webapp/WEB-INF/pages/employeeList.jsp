<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Employee</title>
</head>
<body>  
	<h2 style="text-align:center; color:blue;">Employee LIST</h2>
	<table border="1" cellpadding="8" cellspacing="1">
		<tr>
          <th>#</th>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
		</tr>
		<c:forEach items="${employeeList}" var="employee" varStatus="loop">
          <tr>
            <td>${loop.index}</td>
            <td>${employee.idEmployee}</td>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
          </tr>
		</c:forEach>
    </table>
</body>
</html>