package com.rtrsServer.services.interfaces;

import com.rtrsServer.models.AppealType;
import com.rtrsServer.models.TranslationObject;

import java.util.List;

public interface AppealTypeService {

    List<AppealType> getAllObjects();
    AppealType getObjectById(Long id);
    AppealType save(AppealType type);
}
