package com.dtu.AISSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dtu.AISSystem.dao.EmployeeDAO;
import com.dtu.AISSystem.dao.PayRatesDAO;
import com.dtu.AISSystem.model.Employee;
import com.dtu.AISSystem.model.PayRates;

@Service
public class PayRatesServiceImpl implements PayRatesService {

	@Autowired
	private PayRatesDAO payRatesDAO;
	
	public List<PayRates> getPayRates() {
		return payRatesDAO.listPayRates();
	}
}
