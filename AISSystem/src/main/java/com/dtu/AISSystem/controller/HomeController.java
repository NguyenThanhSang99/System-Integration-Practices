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
	
    @RequestMapping(value={"/", "/home"})
    public String displayHomePage(Model model) {
        
        return "home";
        
    }
    
    @RequestMapping("/employee")
    public String displayListEmployee(Model model) {
    	List<Employee> bookList = employeeService.getEmployee();
		model.addAttribute("employeeList", bookList);
		return "employeeList";
        
    }
    
    @RequestMapping("/payrates")
    public String displayListPayRates(Model model) {
    	List<PayRates> bookList = payService.getPayRates();
		model.addAttribute("payRatesList", bookList);
		return "payratesList";
        
    }
 
}