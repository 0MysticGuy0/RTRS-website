package com.rtrsServer.services.interfaces;

import com.rtrsServer.models.Appeal;
import com.rtrsServer.models.User;

import java.util.List;

public interface UserService {

    List<User> getAll();
    User getByEmail(String email);
    User getById(String id);
    User save(User user);
}
