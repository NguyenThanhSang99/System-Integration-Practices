package com.dtu.AISSystem.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.dtu.AISSystem.model.PayRates;

public class PayRatesMapper implements RowMapper<PayRates> {
	 
    public static final String BASE_SQL = "Select * from Pay_rates";
    
    public PayRates mapRow(ResultSet rs, int rowNum) throws SQLException {
        Integer idPayRates = rs.getInt(1);
        String payRateName = rs.getString(2);
        Long value = rs.getLong(3);
        Long taxPercentage = rs.getLong(4);
        Integer payType = rs.getInt(5);
        Long payAmount = rs.getLong(6);
        Long ptLevelC = rs.getLong(7);
        
        return new PayRates(idPayRates, payRateName, value, taxPercentage, payType, payAmount, ptLevelC);
    }
 
}