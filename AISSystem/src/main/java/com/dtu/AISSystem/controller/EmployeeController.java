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
		
		addAttributeResult(model, "Add employee", employeeService.createEmployee(employee));
		return "redirect:notification";
	}
	
	@RequestMapping(value = { "/deletePayrollEmployee" }, method = RequestMethod.POST)
	public String deleteEmployeePayroll(Model model, int employeeNumber) {
		addAttributeResult(model, "Delete employee", employeeService.deleteEmployee(employeeNumber));
		return "redirect:notification";
	}
	
	@RequestMapping(value = "/updateEmployee", method = RequestMethod.POST)
	public String updateEmployee(Model model, int employeeNumber, int employeeId) {	
		List<PayRates> payratesList = payService.getPayRates();
		model.addAttribute("payRatesList", payratesList);
		model.addAttribute("Employee_ID", employeeId);
		model.addAttribute("employee",employeeService.getEmployeeByNumber(employeeNumber));
		return "updateEmployee";
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
		addAttributeResult(model, "Update employee", employeeService.updateEmployee(employee));
		return "redirect:notification";
	}
	
	@RequestMapping(value = "/createHRPersonal", method = RequestMethod.POST)
	public String createEmployeeHR(Model model, int id, String firstName, String lastName, int ssn) {
		model.addAttribute("employee",new Employee(id, lastName, firstName, ssn));
		
		return "createPersonal";
	}
	
	private void addAttributeResult(Model model, String action, boolean result) {
		if(result) {
			model.addAttribute("action", action);
			model.addAttribute("result", "success");
		} else {
			model.addAttribute("action", action + " in Payroll");
			model.addAttribute("result", "failed");
		}
	}
}
