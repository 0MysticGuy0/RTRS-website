package com.rtrsServer.repositories;

import com.rtrsServer.models.AppealType;
import com.rtrsServer.models.TranslationObject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppealTypeRepository extends JpaRepository<AppealType, Long> {
}
