package com.rtrsServer.repositories;

import com.rtrsServer.models.Channel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChannelRepository extends JpaRepository<Channel, Long> {
}
