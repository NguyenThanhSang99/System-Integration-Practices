package com.dtu.AISSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dtu.AISSystem.model.Employee;
import com.dtu.AISSystem.service.EmployeeService;

@RestController
public class ApiController {
	
	@Autowired
    private EmployeeService employeeService;
	
	@RequestMapping("/employee")
    public @ResponseBody List<Employee> getData(Model model) {
    	List<Employee> employeeList = employeeService.getEmployee();
        return employeeList;
    }
}
