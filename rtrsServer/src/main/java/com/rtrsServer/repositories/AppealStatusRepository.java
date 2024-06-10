package com.rtrsServer.repositories;

import com.rtrsServer.models.AppealStatus;
import com.rtrsServer.models.AppealType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppealStatusRepository extends JpaRepository<AppealStatus, Long> {
}
