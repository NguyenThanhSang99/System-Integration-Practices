<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add employee to Payroll System</title>
<link rel="stylesheet" href="css/addEmployee.css">
</head>
<body>
	<t:home>
		<div class="content">
			<form:form method="POST" action="${pageContext.request.contextPath}/addPayrollEmployee" modelAttribute="employee" class="form">
		         <h2 style="text-align:left; color:blue;">Create New Employee For Payroll</h2>
		         <table border="0">
		            <tr>
		               <td class="hidden"></td>
		               <td><form:input type="number" path="employeeNumber" class="hidden"/></td>
		            </tr>
		            <tr>
		               <td class="hidden"></td>
		               <td><form:input type="number" path="idEmployee" class="hidden"/></td>
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
		               <td>
			               <form:select name="cars" path="payRatesId">
				               	<c:forEach items="${payRatesList}" var="payrates" varStatus="loop">
				               		<option value="${payrates.idPayRates }">${payrates.payRateName}</option>
								</c:forEach>
						  	</form:select>
					  	</td>
		               
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
		                   <input type="submit" value="Create" class="create-btn bg-green"/>
		               </td>
		            </tr>
		         </table>
		      </form:form>
			</div>
	</t:home>
</body>
</html>