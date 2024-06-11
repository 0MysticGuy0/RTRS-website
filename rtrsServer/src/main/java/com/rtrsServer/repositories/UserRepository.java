package com.rtrsServer.repositories;

import com.rtrsServer.models.Appeal;
import com.rtrsServer.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
