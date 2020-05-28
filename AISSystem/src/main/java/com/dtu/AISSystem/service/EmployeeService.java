package com.dtu.AISSystem.service;

import java.util.List;

import com.dtu.AISSystem.model.Employee;

public interface EmployeeService {
	public List<Employee> getEmployee();
	
	public Employee getEmployeeByNumber(int employeeNumber);
	
	public boolean createEmployee(Employee employee);
	
	public boolean updateEmployee(Employee employee);
	
	public boolean deleteEmployee(int employee_number);
}