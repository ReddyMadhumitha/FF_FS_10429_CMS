<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page session="true"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">

<title>Registration</title>
</head>
<body>
    <body style="background-color:powderblue;">
   
	<div align="center">
		<h1>Welcome to CarServicing Registration Page</h1>
		<form:form action="registration" method="post" modelAttribute="employee">
			<table border=1>
				<tr>
					<td>Employee Name</td>
					<td><form:input type="text" path="employeeName" /></td>
				</tr>
				<tr>
					<td>Age</td>
					<td><form:input type="text" path="employeAge" ></form:input></td>
				</tr>
				<tr>
					<td>Email</td>
					<td><form:input type="text" path="employeeEmail"></form:input></td>
				</tr>
				<tr>
					<td>Employee Address</td>
					<td><form:input type="text" path="employeeAddress" ></form:input><form:errors path="contactNumber"></form:errors></td>
				</tr>
				
				<tr>
					<td>Phone Number</td>
					<td><form:input type="text" path="employeePhoneNo" ></form:input><form:errors path="contactNumber"></form:errors></td>
				</tr>
				<tr>
					<td>Password</td>
					<td><form:input type="password" path="password"></form:input></td>
				</tr>
				<tr>
					<td align="center" colspan="2"><input type="submit"
						value="Register"> <input type="reset" value="Reset">
						<a href="login">Login</a></td>
				</tr>
			</table>
		</form:form>
	</div>
</body>
</html>