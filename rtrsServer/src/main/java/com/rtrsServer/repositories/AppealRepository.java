package com.rtrsServer.repositories;

import com.rtrsServer.models.Appeal;
import com.rtrsServer.models.Channel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppealRepository extends JpaRepository<Appeal, Long> {
}
