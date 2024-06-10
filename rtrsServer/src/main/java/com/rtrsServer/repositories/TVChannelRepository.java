package com.rtrsServer.repositories;

import com.rtrsServer.models.AppealStatus;
import com.rtrsServer.models.TVChannel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TVChannelRepository extends JpaRepository<TVChannel, Long> {
}
