package com.dtu.AISSystem.dao;

import com.dtu.AISSystem.model.UserInfo;

public interface UserDAO {
	public UserInfo findUser(String userName);
}
