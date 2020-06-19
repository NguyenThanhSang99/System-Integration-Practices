<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Update information of Employee</title>
<link rel="stylesheet" href="css/addEmployee.css">
<script src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/updateEmployee.js"></script>
</head>
<body>
	<t:home>
		<div class="content">
			<h2 style="text-align:center; color:blue;">Update Employee</h2>
			<form id="emp" class="form">
				<h3>Human Resources</h3>
		         <table border="0">
		         	<tr>
		               <td class="hidden">Employee ID</td>
		               <td><input id="Employee_ID" name="Employee_ID" type="number" placeholder="Enter Employee ID" class="hidden" value="${param.employeeId }"/></td>
		            </tr>
		            <tr>
		               <td>First Name</td>
		               <td><input id="First_Name" name="First_Name" type="text" placeholder="Enter First Name"/></td>
		            </tr>
		            <tr>
		               <td>Last Name</td>
		               <td><input id="Last_Name" name="Last_Name" type="text" placeholder="Enter Last Name"/></td>
		            </tr>
		            <tr>
		               <td>Middle_Initial</td>
		               <td><input id="Middle_Initial" name="Middle_Initial" type="text" placeholder="Enter Middle Initial"/></td>
		            </tr>
		            <tr>
		               <td>Address1</td>
		               <td><input id="Address1" name="Address1" type="text" placeholder="Enter Address 1"/></td>
		            </tr>
		            <tr>
		               <td>Address2</td>
		               <td><input id="Address2" name="Address2" type="text" placeholder="Enter Address 2"/></td>
		            </tr>
		            <tr>
		               <td>City</td>
		               <td><input id="City" name="City" type="text" placeholder="Enter City"/></td>
		            </tr>
		            <tr>
		               <td>State</td>
		               <td><input id="State" name="State" type="text" placeholder="Enter State"/></td>
		            </tr>
		            <tr>
		               <td>Zip</td>
		               <td><input id="Zip" name="Zip" type="text" placeholder="Enter Zip"/></td>
		            </tr>
		            <tr>
		               <td>Email</td>
		               <td><input id="Email" name="Email" type="email" placeholder="Enter Email"/></td>
		            </tr>
		            <tr>
		               <td>Phone_Number</td>
		               <td><input id="Phone_Number" name="Phone_Number" type="text" placeholder="Enter Phone Number"/></td>
		            </tr>
		            <tr>
		               <td>Social_Security_Number</td>
		               <td><input id="Social_Security_Number" name="Social_Security_Number" type="number" required="required" placeholder="Enter Social Security Number"/></td>
		            </tr>
		             <tr>
		               <td>Drivers_License</td>
		               <td><input id="Drivers_License" name="" type="text" placeholder="Enter Drivers License"/></td>
		            </tr>
		            <tr>
		               <td>Marital_Status</td>
		               <td><input id="Marital_Status" name="Marital_Status" type="number" placeholder="Enter Marital Status"/></td>
		            </tr>
		            <tr>
		               <td>Gender</td>
		               <td><select name="Gender" id="Gender">
						  <option value="true">Male</option>
						  <option value="false">Female</option>
						</select></td>
		            </tr>
		            <tr>
		               <td>Shareholder_Status</td>
		               <td>
		               		<select name="Shareholder_Status" id="Shareholder_Status">
								  <option value="true">True</option>
								  <option value="false">False</option>
							</select>
		               </td>
		            </tr>
		            <tr>
		               <td>Benefit_Plans</td>
		               <td><select name="Benefit_Plans" id="Benefit_Plans">
		               		 </select></td>
		            </tr>
		            <tr>
		               <td>Ethnicity</td>
		               <td><input id="Ethnicity" name="Ethnicity" type="number" placeholder="Enter Ethnicity"/></td>
		            </tr>
		         </table>
		       </form>
		       <form:form id="payrollForm" class="form" method="POST" action="${pageContext.request.contextPath}/updatePayrollEmployeeAction" modelAttribute="employee">
		         <table border="0">
		         	<h3>Payroll</h3>
		         	<tr class="hidden">
		               <td></td>
		               <td><form:input type="number" path="employeeNumber"/></td>
		            </tr>
		            <tr class="hidden">
		               <td>Employee ID</td>
		               <td><form:input id="emp_id" type="number" path="idEmployee"/></td>
		            </tr>
		            <tr class="hidden">
		               <td class="hidden">Last Name</td>
		               <td><form:input id="lastname" type="text" path="lastName"/></td>
		            </tr>
		            <tr class="hidden">
		               <td class="hidden">First Name</td>
		               <td><form:input id="firstname" type="text" path="firstName" class="hidden"/></td>
		            </tr>
		            <tr class="hidden">
		               <td>SSN</td>
		               <td><form:input id="ssn" type="number" path="ssn" placeholder="Enter Marital Status"/></td>
		            </tr>
		             <tr>
		               <td>PayRate</td>
		               <td><form:input type="text" path="payRate" placeholder="Enter PayRate"/></td>
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
		               <td><form:input type="number" path="vacationDays" placeholder="Enter Vacation Days"/></td>
		            </tr>
		            <tr>
		               <td>Paid to date</td>
		               <td><form:input type="number" path="paidToDate" placeholder="Enter Paid to date"/></td>
		            </tr>
		            <tr>
		               <td>Paid last year</td>
		               <td><form:input type="number" path="paidLastYear" placeholder="Enter Paid last year"/></td>
		            </tr>
		         </table>
		      </form:form>
		       <button class="add-btn bg-blue" onclick="SubForm()">Update</button>
			</div>
	</t:home>
</body>
</html>