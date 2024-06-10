package com.rtrsServer.repositories;

import com.rtrsServer.models.AppealType;
import com.rtrsServer.models.TVProgram;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TVProgramRepository extends JpaRepository<TVProgram, Long> {
}
