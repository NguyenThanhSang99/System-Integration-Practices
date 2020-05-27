package com.dtu.AISSystem.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dtu.AISSystem.model.Employee;
import com.dtu.AISSystem.model.PayRates;
import com.dtu.AISSystem.service.EmployeeService;
import com.dtu.AISSystem.service.PayRatesService;
 
@Controller
public class HomeController {
    
	@Autowired
    private EmployeeService employeeService;
	
	@Autowired
    private PayRatesService payService;
	
    @RequestMapping("/home")
    public String displayHomePage(Model model) {
    	List<Employee> employeeList = employeeService.getEmployee();
		model.addAttribute("employeeList", employeeList);
        return "home";
        
    }
    
    @RequestMapping("/worktime")
    public String displayListEmployee(Model model) {
		return "worktime";
        
    }
    
    @RequestMapping("/benefit")
    public String displayListPayRates(Model model) {
    	List<PayRates> payratesList = payService.getPayRates();
		model.addAttribute("payRatesList", payratesList);
		return "benefit";
        
    }
    
    @RequestMapping("/notification")
    public String displayNotification(Model model) {
    	List<Employee> employeeList = employeeService.getEmployee();
		model.addAttribute("employeeList", employeeList);
		return "notification";
    }
 
}