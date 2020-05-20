package com.dtu.AISSystem.authentication;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.dtu.AISSystem.dao.UserDAO;
import com.dtu.AISSystem.model.UserInfo;
 
@Service
public class MyDBAuthenticationService implements UserDetailsService {
 
    @Autowired
    private UserDAO userInfoDAO;
 
    //@Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {    	
        UserInfo userInfo = userInfoDAO.findUser(username);
 
        if (userInfo == null) {
            throw new UsernameNotFoundException("User " + username + " was not found in the database");
        }
         
        List<GrantedAuthority> grantList= new ArrayList<GrantedAuthority>();
        GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_USER");
        grantList.add(authority);
        
        UserDetails userDetails = (UserDetails) new User(userInfo.getUserName(),
                userInfo.getPassword(),grantList);
 
        return userDetails;
    }     
}
     
