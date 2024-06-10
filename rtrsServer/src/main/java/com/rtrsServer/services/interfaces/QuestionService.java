package com.rtrsServer.services.interfaces;

import com.rtrsServer.models.AppealStatus;
import com.rtrsServer.models.Question;

import java.util.List;

public interface QuestionService {

    List<Question> getAll();
    Question getById(Long id);
    Question save(Question question);
}
