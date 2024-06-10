package com.rtrsServer.models;

import com.rtrsServer.services.AppealTypeServiceImpl;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;

@Data
@Entity
@NoArgsConstructor
@Table(name="appeal_types")
public class AppealType {
    @Id
    @GeneratedValue
    private Long ID;
    @NonNull
    private String name;


    public AppealType(String name) {
        this.name = name;
    }

}
