package com.rtrsServer.services;

import com.rtrsServer.models.Channel;
import com.rtrsServer.repositories.ChannelRepository;
import com.rtrsServer.services.interfaces.ChannelService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Primary
public class ChannelServiceImpl implements ChannelService {
    private ChannelRepository repository;
    @Override
    public List<Channel> getAllChannels() {
        return repository.findAll();
    }

    @Override
    public Channel getChannelById(Long id) {
        return repository.getReferenceById(id);
    }

    @Override
    public Channel save(Channel channel) {
        return repository.save(channel);
    }
}
