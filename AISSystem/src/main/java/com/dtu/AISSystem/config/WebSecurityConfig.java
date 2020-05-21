package com.dtu.AISSystem.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;

import com.dtu.AISSystem.authentication.MyDBAuthenticationService;
 
@Configuration
@EnableWebSecurity
@Transactional
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
 
  
   @Autowired
   MyDBAuthenticationService myDBAauthenticationService;
 
   @Autowired
   public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
       auth.authenticationProvider(authProvider());
   }
   
   
 
   @Override
   protected void configure(HttpSecurity http) throws Exception {
 
       http.csrf().disable();
  
       http.authorizeRequests().antMatchers("/login", "/logout").permitAll();
       
       http.authorizeRequests().antMatchers("/*").access("hasRole('ROLE_USER')");
  
       http.authorizeRequests().and().formLogin()//
  
               .loginProcessingUrl("/loginAction") // Submit URL
               .loginPage("/login")//
               .defaultSuccessUrl("/home")//
               .failureUrl("/login?error=true")//
               .usernameParameter("username")//
               .passwordParameter("password")
               
               .and().logout().logoutUrl("/logout").logoutSuccessUrl("/login");
 
   }
   
   @Bean
   public DaoAuthenticationProvider authProvider() {
       DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
       authProvider.setUserDetailsService(myDBAauthenticationService);
       return authProvider;
   }
}