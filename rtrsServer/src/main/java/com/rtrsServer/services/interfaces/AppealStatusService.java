package com.rtrsServer.services.interfaces;

import com.rtrsServer.models.AppealStatus;
import com.rtrsServer.models.AppealType;

import java.util.List;

public interface AppealStatusService {

    List<AppealStatus> getAllStatuses();
    AppealStatus getById(Long id);
    AppealStatus save(AppealStatus status);
}
