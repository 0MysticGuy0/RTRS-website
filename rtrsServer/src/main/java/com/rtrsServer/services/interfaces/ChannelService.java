package com.rtrsServer.services.interfaces;

import com.rtrsServer.models.Channel;

import java.util.List;

public interface ChannelService {

    List<Channel> getAllChannels();
    Channel getChannelById(Long id);
    Channel save(Channel channel);
}
