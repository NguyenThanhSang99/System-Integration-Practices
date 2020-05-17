package com.dtu.AISSystem.mapper;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.dtu.AISSystem.model.UserInfo;
 
public class UserMapper implements RowMapper<UserInfo> {
 
    @Override
    public UserInfo mapRow(ResultSet rs, int rowNum) throws SQLException {
        String userName = rs.getString("User_Name");

	    String password = rs.getString("Password");
 
        return new UserInfo(userName, password);
    }
 
}
