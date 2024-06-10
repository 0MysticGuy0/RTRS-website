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
@Table(name="tv_channels")
public class TVChannel {
    @Id
    @GeneratedValue
    private Long ID;
    @NonNull
    private String name;


    public TVChannel(String name) {
        this.name = name;
    }

}
