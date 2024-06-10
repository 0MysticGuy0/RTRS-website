package com.rtrsServer.services;

import com.rtrsServer.models.Channel;
import com.rtrsServer.models.TranslationObject;
import com.rtrsServer.repositories.ChannelRepository;
import com.rtrsServer.repositories.TranslationObjectRepository;
import com.rtrsServer.services.interfaces.ChannelService;
import com.rtrsServer.services.interfaces.TranslationObjectService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Primary
public class TranslationObjectServiceImpl implements TranslationObjectService {
    private TranslationObjectRepository repository;

    @Override
    public List<TranslationObject> getAllObjects() {
        return repository.findAll();
    }

    @Override
    public TranslationObject getObjectById(Long id) {
        return repository.getReferenceById(id);
    }

    @Override
    public TranslationObject save(TranslationObject object) {
        return repository.save(object);
    }
}
