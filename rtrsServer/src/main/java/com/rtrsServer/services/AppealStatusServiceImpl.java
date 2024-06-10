package com.rtrsServer.services;

import com.rtrsServer.models.AppealStatus;
import com.rtrsServer.models.AppealType;
import com.rtrsServer.repositories.AppealStatusRepository;
import com.rtrsServer.repositories.AppealTypeRepository;
import com.rtrsServer.services.interfaces.AppealStatusService;
import com.rtrsServer.services.interfaces.AppealTypeService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Primary
public class AppealStatusServiceImpl implements AppealStatusService {
    private AppealStatusRepository repository;

    @Override
    public List<AppealStatus> getAllStatuses() {
        return repository.findAll();
    }

    @Override
    public AppealStatus getById(Long id) {
        return repository.getReferenceById(id);
    }

    @Override
    public AppealStatus save(AppealStatus status) {
        return repository.save(status);
    }
}
