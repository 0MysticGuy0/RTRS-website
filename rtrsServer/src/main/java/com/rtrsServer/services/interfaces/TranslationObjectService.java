package com.rtrsServer.services.interfaces;

import com.rtrsServer.models.Channel;
import com.rtrsServer.models.TranslationObject;

import java.util.List;

public interface TranslationObjectService {

    List<TranslationObject> getAllObjects();
    TranslationObject getObjectById(Long id);
    TranslationObject save(TranslationObject channel);
}
