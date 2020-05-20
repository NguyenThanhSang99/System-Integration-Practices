package com.dtu.AISSystem.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.dtu.AISSystem.mapper.EmployeeMapper;
import com.dtu.AISSystem.mapper.PayRatesMapper;
import com.dtu.AISSystem.model.Employee;
import com.dtu.AISSystem.model.PayRates;

@Repository
@Transactional
public class PayRatesDAOImpl extends JdbcDaoSupport implements PayRatesDAO{

	@Autowired
    public PayRatesDAOImpl(DataSource dataSource) {
        this.setDataSource(dataSource);
    }

	public List<PayRates> listPayRates() {
		String sql = "Select * from Pay_rates";
		 
		Object[] params = new Object[] {};
        PayRatesMapper mapper = new PayRatesMapper();
 
        List<PayRates> list = this.getJdbcTemplate().query(sql, params, mapper);
        return list;
	}

}