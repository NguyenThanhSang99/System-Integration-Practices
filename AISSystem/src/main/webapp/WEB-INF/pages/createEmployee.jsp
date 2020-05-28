<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add employee to Payroll System</title>
</head>
<body>
	<t:home>
		<div class="content">
			<h2 style="text-align:center; color:blue;">Create New Employee For Payroll</h2>
	
			<form:form method="POST" action="${pageContext.request.contextPath}/addEmployeeToPayroll" modelAttribute="employee">
		         <table border="0">
		            <tr>
		               <td>Employee Number</td>
		               <td><form:input type="number" path="employeeNumber"/></td>
		            </tr>
		            <tr>
		               <td>Employee ID</td>
		               <td><form:input type="number" path="idEmployee"/></td>
		            </tr>
		            <tr>
		               <td>Last Name</td>
		               <td><form:input type="text" path="lastName"/></td>
		            </tr>
		            <tr>
		               <td>First Name</td>
		               <td><form:input type="text" path="firstName"/></td>
		            </tr>
		            <tr>
		               <td>SSN</td>
		               <td><form:input type="number" path="ssn"/></td>
		            </tr>
		             <tr>
		               <td>PayRate</td>
		               <td><form:input type="text" path="payRate"/></td>
		            </tr>
		            <tr>
		               <td>PayRates ID</td>
		               <td><form:input type="number" path="payRatesId"/></td>
		            </tr>
		            <tr>
		               <td>Vacation Days</td>
		               <td><form:input type="number" path="vacationDays"/></td>
		            </tr>
		            <tr>
		               <td>Paid to date</td>
		               <td><form:input type="number" path="paidToDate"/></td>
		            </tr>
		            <tr>
		               <td>Paid last year</td>
		               <td><form:input type="number" path="paidLastYear"/></td>
		            </tr>
		            <tr>
		               <td colspan="2">                   
		                   <input type="submit" value="Submit" />
		               </td>
		            </tr>
		         </table>
		      </form:form>
			</div>
	</t:home>
	
</body>
</html>