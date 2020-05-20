package com.dtu.AISSystem.dao;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dtu.AISSystem.mapper.UserMapper;
import com.dtu.AISSystem.model.UserInfo;
 
@Service
@Transactional
public class UserDAOImpl extends JdbcDaoSupport implements UserDAO {
 
    @Autowired
    public UserDAOImpl(DataSource dataSource) {
        this.setDataSource(dataSource);
    }
    /*
    @Override
    public UserInfo findUser(String userName) {
        String sql = "Select u.User_name,u.Password "//
                + " from Users u where u.User_name = ? ";
 
        Object[] params = new Object[] { userName };
        UserMapper mapper = new UserMapper();
        try {
            UserInfo userInfo = this.getJdbcTemplate().queryForObject(sql, params, mapper);
            return userInfo;
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }    
    */

	public UserInfo findUser(String userName) {
		String sql = "Select u.User_name,u.Password "//
                + " from Users u where u.User_name = ? ";
 
        Object[] params = new Object[] { userName };
        UserMapper mapper = new UserMapper();
        try {
            UserInfo userInfo = this.getJdbcTemplate().queryForObject(sql, params, mapper);
            return userInfo;
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
	} 
}
