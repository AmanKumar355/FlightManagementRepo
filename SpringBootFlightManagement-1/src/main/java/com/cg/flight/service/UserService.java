package com.cg.flight.service;

import java.util.List;

import com.cg.flight.entity.User;

public interface UserService {

	public boolean addUser(User user);
	public User viewUser(String userId);
	public boolean editUser(User user);
}
