package com.dtu.AISSystem.dao;

import java.util.List;

import javax.sql.DataSource;

import org.apache.commons.logging.impl.Log4JLogger;
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

	public boolean createEmployee(Employee employee) {
		try {
			String sql = "INSERT INTO `employee` VALUES ("
					+ employee.getEmployeeNumber() + "," + employee.getIdEmployee() 
					+ ",'" + employee.getLastName() + "','" + employee.getFirstName() 
					+ "'," + employee.getSsn() + ",'" + employee.getPayRate() 
					+ "'," + employee.getPayRatesId() + "," + employee.getVacationDays() 
					+ "," + employee.getPaidToDate() + "," + employee.getPaidLastYear() + ");";
	 
	        this.getJdbcTemplate().execute(sql);	
	        return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public boolean updateEmployee(Employee employee) {
		try {
			String sql = "UPDATE `employee` SET `idEmployee` = " + employee.getIdEmployee() 
					+ ", `Last_Name` = '" + employee.getLastName() + "', `First_Name` = '" + employee.getFirstName() 
					+ "', `SSN` = " + employee.getSsn() + ", `Pay_Rate` = '" + employee.getPayRate() 
					+ "', `PayRates_id` = " + employee.getPayRatesId() + ", `Vacation_Days` = " + employee.getVacationDays() 
					+ ", `Paid_To_Date` = " + employee.getPaidToDate() + ", `Paid_Last_Year` = " + employee.getPaidLastYear()
					+ " WHERE `employee`.`Employee_Number` = " + employee.getEmployeeNumber() + ";";
	 
	        this.getJdbcTemplate().execute(sql);	
	        return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public boolean deleteEmployee(int employee_number) {
		try {
			String sql = "DELETE FROM `employee` WHERE `employee`.`Employee_Number` = "
					+ employee_number + ";";
	 
	        this.getJdbcTemplate().execute(sql);	
	        return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public Employee getEmployeeByNumber(int employeeNumber) {
		Employee employee = new Employee();
		try {
			String sql = "SELECT * FROM `employee` WHERE `employee`.`Employee_Number` = " 
					+ employeeNumber + ";";
			Object[] params = new Object[] {};
	        EmployeeMapper mapper = new EmployeeMapper();
	 
	        List<Employee> list = this.getJdbcTemplate().query(sql, params, mapper);
	        employee = list.get(0);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return employee;
	}

}