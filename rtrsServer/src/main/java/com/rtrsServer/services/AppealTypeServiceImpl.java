package com.rtrsServer.services;

import com.rtrsServer.models.AppealType;
import com.rtrsServer.models.TranslationObject;
import com.rtrsServer.repositories.AppealTypeRepository;
import com.rtrsServer.repositories.TranslationObjectRepository;
import com.rtrsServer.services.interfaces.AppealTypeService;
import com.rtrsServer.services.interfaces.TranslationObjectService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Primary
public class AppealTypeServiceImpl implements AppealTypeService {
    private AppealTypeRepository repository;

    @Override
    public List<AppealType> getAllObjects() {
        return repository.findAll();
    }

    @Override
    public AppealType getObjectById(Long id) {
        return repository.getReferenceById(id);
    }

    @Override
    public AppealType save(AppealType type) {
        return repository.save(type);
    }
}
