package com.rtrsServer.repositories;

import com.rtrsServer.models.TranslationObject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TranslationObjectRepository extends JpaRepository<TranslationObject, Long> {
}
