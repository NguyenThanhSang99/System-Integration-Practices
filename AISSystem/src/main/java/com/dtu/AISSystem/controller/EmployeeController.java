package com.dtu.AISSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.dtu.AISSystem.model.Employee;
import com.dtu.AISSystem.service.EmployeeService;

@Controller
public class EmployeeController {
	@Autowired
    private EmployeeService employeeService;
	
	@RequestMapping(value = "/createEmployeeToPayroll", method = RequestMethod.GET)
	public String createEmployeePayroll(Model model, String firstName, String lastName, int ssn) {
		model.addAttribute("employee",new Employee(lastName, firstName, ssn));
		
		return "createEmployee";
	}
	
	@RequestMapping(value = { "/addEmployeeToPayroll" }, method = RequestMethod.POST)
	public String addEmployeePayroll(@ModelAttribute("employee") Employee employee) {
		employeeService.createEmployee(employee);
		return "redirect:notification";
	}
	
	@RequestMapping(value = "/createEmployeeToHR", method = RequestMethod.GET)
	public String createEmployeeHR(Model model, String firstName, String lastName, int ssn) {
		model.addAttribute("employee",new Employee(firstName, lastName, ssn));
		
		return "createPersonal";
	}
}
