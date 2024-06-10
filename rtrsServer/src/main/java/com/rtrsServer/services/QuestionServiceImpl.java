package com.rtrsServer.services;

import com.rtrsServer.models.AppealType;
import com.rtrsServer.models.Question;
import com.rtrsServer.repositories.AppealTypeRepository;
import com.rtrsServer.repositories.QuestionRepository;
import com.rtrsServer.services.interfaces.AppealTypeService;
import com.rtrsServer.services.interfaces.QuestionService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Primary
public class QuestionServiceImpl implements QuestionService {
    private QuestionRepository repository;

    @Override
    public List<Question> getAll() {
        return repository.findAll();
    }

    @Override
    public Question getById(Long id) {
        return repository.getReferenceById(id);
    }

    @Override
    public Question save(Question question) {
        return repository.save(question);
    }
}
