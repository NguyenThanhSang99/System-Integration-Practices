package com.dtu.AISSystem.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.dtu.AISSystem.model.Employee;

public class EmployeeMapper implements RowMapper<Employee> {
	 
    public static final String BASE_SQL = "Select * from Employee";
    
    public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
        Integer employeeNumber = rs.getInt(1);
        Integer idEmployee = rs.getInt(2);
        String lastName = rs.getString(3);
        String firstName = rs.getString(4);
        Long ssn = rs.getLong(5);
        String payRate = rs.getString(6);
        Integer payRatesId = rs.getInt(7);
      	Integer vacationDays = rs.getInt(8);
      	Byte paidToDate = rs.getByte(9);
      	Byte paidLastYear = rs.getByte(10);
 
        return new Employee(employeeNumber, idEmployee, lastName, firstName, ssn, payRate
        		, payRatesId, vacationDays, paidToDate, paidLastYear);
    }
 
}