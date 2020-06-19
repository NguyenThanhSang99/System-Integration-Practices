<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add employee to HR System</title>
<link rel="stylesheet" href="css/addEmployee.css">
<script src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/addHREmployee.js"></script>
</head>
<body>
	<t:home>
		<div class="content">
			<div class="form oneForm">
			<form id="emp">
				<h3 style="text-align:left; color:blue;">Create New Employee For HR</h3>
		         <table border="0">
		         	<tr>
		         		<td style="display: none;">Employee ID</td>
		               <td><input id="Employee_ID" style="display: none;" name="Employee_ID" type="number" value="${employee.idEmployee}"/></td>
		            </tr>
		            <tr>
		               <td>First Name</td>
		               <td><input id="First_Name" name="First_Name" type="text" value="${employee.firstName}"/></td>
		            </tr>
		            <tr>
		               <td>Last Name</td>
		               <td><input id="Last_Name" name="Last_Name" type="text" value="${employee.lastName}"/></td>
		            </tr>
		            <tr>
		               <td>Middle_Initial</td>
		               <td><input id="Middle_Initial" name="Middle_Initial" type="text"/></td>
		            </tr>
		            <tr>
		               <td>Address1</td>
		               <td><input id="Address1" name="Address1" type="text"/></td>
		            </tr>
		            <tr>
		               <td>Address2</td>
		               <td><input id="Address2" name="Address2" type="text"/></td>
		            </tr>
		            <tr>
		               <td>City</td>
		               <td><input id="City" name="City" type="text"/></td>
		            </tr>
		            <tr>
		               <td>State</td>
		               <td><input id="State" name="State" type="text"/></td>
		            </tr>
		            <tr>
		               <td>Zip</td>
		               <td><input id="Zip" name="Zip" type="text"/></td>
		            </tr>
		            <tr>
		               <td>Email</td>
		               <td><input id="Email" name="Email" type="email"/></td>
		            </tr>
		            <tr>
		               <td>Phone_Number</td>
		               <td><input id="Phone_Number" name="Phone_Number" type="text"/></td>
		            </tr>
		            <tr>
		               <td>Social_Security_Number</td>
		               <td><input id="Social_Security_Number" name="Social_Security_Number" type="number" value="${employee.ssn}"/></td>
		            </tr>
		             <tr>
		               <td>Drivers_License</td>
		               <td><input id="Drivers_License" name="" type="text"/></td>
		            </tr>
		            <tr>
		               <td>Marital_Status</td>
		               <td><input id="Marital_Status" name="Marital_Status" type="number"/></td>
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
		               <td><input id="Shareholder_Status" name="Shareholder_Status" type="checkbox"/></td>
		            </tr>
		            <tr>
		               <td>Benefit_Plans</td>
		               <td>
		               	<select name="Benefit_Plans" id="Benefit_Plans">
		               		 </select>
		               	</td>
		            </tr>
		            <tr>
		               <td>Ethnicity</td>
		               <td><input id="Ethnicity" name="Ethnicity" type="number"/></td>
		            </tr>
		         </table>
		         
		       </form>
		       <button class="create-btn bg-green" onclick="SubForm()">Create</button>
		       </div>
			</div>
	</t:home>
</body>
</html>