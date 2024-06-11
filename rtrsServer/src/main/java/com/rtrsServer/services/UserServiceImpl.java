package com.rtrsServer.services;

import com.rtrsServer.models.Appeal;
import com.rtrsServer.models.User;
import com.rtrsServer.repositories.AppealRepository;
import com.rtrsServer.repositories.UserRepository;
import com.rtrsServer.services.interfaces.AppealService;
import com.rtrsServer.services.interfaces.UserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Primary
public class UserServiceImpl implements UserService {
    private UserRepository repository;
    @Override
    public List<User> getAll() {
        return repository.findAll();
    }

    @Override
    public User getByEmail(String email) {
        return getAll().stream().filter(u -> u.getEmail().equals(email)).findFirst().orElse(null);
    }

    @Override
    public User getById(String email) {
        return repository.getReferenceById(email);
    }

    @Override
    public User save(User user) {
        return repository.save(user);
    }
}
