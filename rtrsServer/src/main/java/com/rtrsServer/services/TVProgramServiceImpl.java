package com.rtrsServer.services;

import com.rtrsServer.models.AppealType;
import com.rtrsServer.models.TVProgram;
import com.rtrsServer.repositories.AppealTypeRepository;
import com.rtrsServer.repositories.TVProgramRepository;
import com.rtrsServer.services.interfaces.AppealTypeService;
import com.rtrsServer.services.interfaces.TVProgramService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
@Primary
public class TVProgramServiceImpl implements TVProgramService {
    private TVProgramRepository repository;

    @Override
    public List<TVProgram> getAll() {
        return repository.findAll();
    }

    @Override
    public List<TVProgram> getAllByDate(Date date) {
        return getAll().stream()
                .filter(p -> (p.getTime().getYear()==date.getYear() && p.getTime().getMonth()==date.getMonth() && p.getTime().getDate()==date.getDate()))
                .toList();
    }

    @Override
    public TVProgram getById(Long id) {
        return repository.getReferenceById(id);
    }

    @Override
    public TVProgram save(TVProgram program) {
        return repository.save(program);
    }
}
