package com.dtu.AISSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dtu.AISSystem.dao.EmployeeDAO;
import com.dtu.AISSystem.model.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDAO employeeDAO;
	
	public List<Employee> getEmployee() {
		return employeeDAO.listEmployee();
	}

	public boolean createEmployee(Employee employee) {
		return employeeDAO.createEmployee(employee);
		
	}

	public boolean updateEmployee(Employee employee) {
		return employeeDAO.updateEmployee(employee);
		
	}

	public boolean deleteEmployee(int employee_number) {
		return employeeDAO.deleteEmployee(employee_number);
		
	}

	public Employee getEmployeeByNumber(int employeeNumber) {
		return employeeDAO.getEmployeeByNumber(employeeNumber);
	}

}
