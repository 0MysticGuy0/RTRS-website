package com.rtrsServer.services.interfaces;

import com.rtrsServer.models.Appeal;
import com.rtrsServer.models.Channel;

import java.util.List;

public interface AppealService {

    List<Appeal> getAllAppeals();
    List<Appeal> getAllAppealsByEmail(String email);
    Appeal getById(Long id);
    Appeal save(Appeal appeal);
}
