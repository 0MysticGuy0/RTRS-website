package com.rtrsServer.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@Entity
@NoArgsConstructor
@Table(name="appeal_statuses")
public class AppealStatus {
    @Id
    @GeneratedValue
    private Long ID;
    @NonNull
    private String name;


    public AppealStatus(String name) {
        this.name = name;
    }
}
