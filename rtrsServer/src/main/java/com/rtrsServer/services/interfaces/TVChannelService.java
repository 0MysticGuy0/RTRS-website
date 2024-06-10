package com.rtrsServer.services.interfaces;

import com.rtrsServer.models.AppealStatus;
import com.rtrsServer.models.TVChannel;

import java.util.List;

public interface TVChannelService {

    List<TVChannel> getAll();
    TVChannel getById(Long id);
    TVChannel save(TVChannel channel);
}
