package com.rtrsServer.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@Table(name="channels")
public class Channel {
    @Id
    @GeneratedValue
    private Long ID;
    @NonNull
    private String name;
    private Integer TVC;
    private Float frequency;
    @ManyToMany
    List<TranslationObject>  translationObjects = new ArrayList<>();

    public Channel(String name, Integer TVC, Float frequency,TranslationObject ...translationObjects) {
        this.name = name;
        this.TVC = TVC;
        this.frequency = frequency;
        this.translationObjects.addAll(Arrays.asList(translationObjects));
    }
}
