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

	public void createEmployee(Employee employee) {
		employeeDAO.createEmployee(employee);
	}

}
