package com.dtu.AISSystem.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.dtu.AISSystem.mapper.EmployeeMapper;
import com.dtu.AISSystem.model.Employee;

@Repository
@Transactional
public class EmployeeDAOImpl extends JdbcDaoSupport implements EmployeeDAO{

	@Autowired
    public EmployeeDAOImpl(DataSource dataSource) {
        this.setDataSource(dataSource);
    }
	
	public List<Employee> listEmployee() {
		String sql = "Select * from Employee";
 
		Object[] params = new Object[] {};
        EmployeeMapper mapper = new EmployeeMapper();
 
        List<Employee> list = this.getJdbcTemplate().query(sql, params, mapper);
        return list;
	}

	public void createEmployee(Employee employee) {
		String sql = "INSERT INTO `employee` VALUES ("
				+ employee.getEmployeeNumber() + "," + employee.getIdEmployee() 
				+ ",'" + employee.getLastName() + "','" + employee.getFirstName() 
				+ "'," + employee.getSsn() + ",'" + employee.getPayRate() 
				+ "'," + employee.getPayRatesId() + "," + employee.getVacationDays() 
				+ "," + employee.getPaidToDate() + "," + employee.getPaidLastYear() + ");";
 
        this.getJdbcTemplate().execute(sql);		
	}

}