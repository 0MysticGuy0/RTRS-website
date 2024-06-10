package com.rtrsServer.repositories;

import com.rtrsServer.models.AppealStatus;
import com.rtrsServer.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
