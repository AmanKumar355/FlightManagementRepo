package com.cg;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cg.flight.entity.User;
import com.cg.flight.util.MailConstants;
import com.cg.flight.web.AdminInterceptor;
import com.cg.flight.web.LoginInterceptor;

@SpringBootApplication
public class SpringBootFlightManagement1Application implements WebMvcConfigurer {

	static Logger logger = LoggerFactory.getLogger(SpringBootFlightManagement1Application.class);
	public static void main(String[] args) {
		SpringApplication.run(SpringBootFlightManagement1Application.class, args);
	}
	

	@Autowired
	private LoginInterceptor loginInterceptor;
	
	@Autowired
	private AdminInterceptor adminInterceptor;
	
	@Bean(name="authenticatemap")
	public Map<String,User> getAuthenticateMap(){
		return new HashMap<>();
	}
	
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
	
		registry.addInterceptor(loginInterceptor).addPathPatterns(new String[] {"/addbooking","/cancelbooking/*","/viewuser/*",
				"/viewpassenger/*","/viewbooking/*","/viewschedule/*/*/*"});
		registry.addInterceptor(adminInterceptor).addPathPatterns(new String[] {"/addschedule","/editschedule"
				});

	}
	
	
		
		
	}
		