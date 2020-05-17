package com.dtu.AISSystem.controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
 
@Controller
public class HomeController {
 
    @RequestMapping("/permit")
    public String hello(Model model) {
        
        return "home";
        
    }
    
    @RequestMapping("/home")
    public String displayHomePage(Model model) {
        
        return "home";
        
    }
 
}