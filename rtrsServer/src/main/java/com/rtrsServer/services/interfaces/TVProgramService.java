package com.rtrsServer.services.interfaces;

import com.rtrsServer.models.Channel;
import com.rtrsServer.models.TVProgram;

import java.util.Date;
import java.util.List;

public interface TVProgramService {

    List<TVProgram> getAll();
    List<TVProgram> getAllByDate(Date date);
    TVProgram getById(Long id);
    TVProgram save(TVProgram program);
}
