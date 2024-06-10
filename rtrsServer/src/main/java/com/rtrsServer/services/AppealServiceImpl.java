package com.rtrsServer.services;

import com.rtrsServer.models.Appeal;
import com.rtrsServer.models.Channel;
import com.rtrsServer.repositories.AppealRepository;
import com.rtrsServer.repositories.ChannelRepository;
import com.rtrsServer.services.interfaces.AppealService;
import com.rtrsServer.services.interfaces.ChannelService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Primary
public class AppealServiceImpl implements AppealService {
    private AppealRepository repository;
    @Override
    public List<Appeal> getAllAppeals() {
        return repository.findAll();
    }

    @Override
    public List<Appeal> getAllAppealsByEmail(String email) {
        return getAllAppeals().stream().filter(appeal -> appeal.getEmail().equals(email)).toList();
    }

    @Override
    public Appeal getById(Long id) {
        return repository.getReferenceById(id);
    }

    @Override
    public Appeal save(Appeal appeal) {
        return repository.save(appeal);
    }
}
