package com.dtu.AISSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.dtu.AISSystem.model.Employee;
import com.dtu.AISSystem.model.PayRates;
import com.dtu.AISSystem.service.EmployeeService;
import com.dtu.AISSystem.service.PayRatesService;

@Controller
public class EmployeeController {
	@Autowired
    private EmployeeService employeeService;
	
	@Autowired
    private PayRatesService payService;
	
	@RequestMapping(value = "/createNewEmployee", method = RequestMethod.GET)
	public String createEmployee(Model model) {	
		List<PayRates> payratesList = payService.getPayRates();
		model.addAttribute("payRatesList", payratesList);
		model.addAttribute("employee",new Employee());
		return "addEmployee";
	}
	
	@RequestMapping(value = "/createPayrollEmployee", method = RequestMethod.POST)
	public String createEmployeePayroll(Model model, int id, String firstName, String lastName, int ssn) {
		List<PayRates> payratesList = payService.getPayRates();
		model.addAttribute("payRatesList", payratesList);
		
		model.addAttribute("employee",new Employee(id, lastName, firstName, ssn));
		
		return "createEmployee";
	}
	
	@RequestMapping(value = { "/addPayrollEmployee" }, method = RequestMethod.POST)
	public String addEmployeePayroll(Model model, @ModelAttribute("employee") Employee employee) {
		List<Employee> employeeList = employeeService.getEmployee();
		int employeeNumber = 1000+employeeList.size()+1;
		employee.setEmployeeNumber(employeeNumber);
		
		model.addAttribute("action", "Add");
		if(employeeService.createEmployee(employee)) {
			model.addAttribute("result", "success");
		} else {
			model.addAttribute("result", "failed");
		}
		return "redirect:notification";
	}
	
	@RequestMapping(value = { "/deletePayrollEmployee" }, method = RequestMethod.POST)
	public String daleteEmployeePayroll(Model model, int employeeNumber) {
		model.addAttribute("action", "Delete");
		if(employeeService.deleteEmployee(employeeNumber)) {
			model.addAttribute("result", "success");
		} else {
			model.addAttribute("result", "failed");
		}
		return "redirect:notification";
	}
	
	@RequestMapping(value = { "/updatePayrollEmployee" }, method = RequestMethod.POST)
	public String updateEmployeePayroll(Model model, int employeeNumber) {
		List<PayRates> payratesList = payService.getPayRates();
		model.addAttribute("payRatesList", payratesList);
		model.addAttribute("employee", employeeService.getEmployeeByNumber(employeeNumber));
		return "updateEmployeePayroll";
	}
	
	@RequestMapping(value = { "/updatePayrollEmployeeAction" }, method = RequestMethod.POST)
	public String updateEmployeePayrollAction(Model model, @ModelAttribute("employee") Employee employee) {
		model.addAttribute("action", "Update");
		if(employeeService.updateEmployee(employee)) {
			model.addAttribute("result", "success");
		} else {
			model.addAttribute("result", "failed");
		}
		return "redirect:notification";
	}
	
	@RequestMapping(value = "/createHRPersonal", method = RequestMethod.POST)
	public String createEmployeeHR(Model model, int id, String firstName, String lastName, int ssn) {
		model.addAttribute("employee",new Employee(id, lastName, firstName, ssn));
		
		return "createPersonal";
	}
}
