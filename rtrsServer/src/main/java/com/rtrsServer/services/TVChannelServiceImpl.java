package com.rtrsServer.services;

import com.rtrsServer.models.AppealStatus;
import com.rtrsServer.models.TVChannel;
import com.rtrsServer.repositories.AppealStatusRepository;
import com.rtrsServer.repositories.TVChannelRepository;
import com.rtrsServer.services.interfaces.AppealStatusService;
import com.rtrsServer.services.interfaces.TVChannelService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Primary
public class TVChannelServiceImpl implements TVChannelService {
    private TVChannelRepository repository;

    @Override
    public List<TVChannel> getAll() {
        return repository.findAll();
    }

    @Override
    public TVChannel getById(Long id) {
        return repository.getReferenceById(id);
    }

    @Override
    public TVChannel save(TVChannel channel) {
        return repository.save(channel);
    }
}
