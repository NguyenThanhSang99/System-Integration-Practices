package com.dtu.AISSystem.dao;

import java.util.List;

import com.dtu.AISSystem.model.Employee;

public interface EmployeeDAO {
	
	    public List<Employee> listEmployee();
	    
	    public Employee getEmployeeByNumber(int employeeNumber);
	    
	    public boolean createEmployee(Employee employee);
	    
	    public boolean updateEmployee(Employee employee);
	    
	    public boolean deleteEmployee(int employee_id);
}
