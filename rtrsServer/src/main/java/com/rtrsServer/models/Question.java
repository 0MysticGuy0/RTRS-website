package com.rtrsServer.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@Entity
@NoArgsConstructor
@Table(name="questions")
public class Question {
    @Id
    @GeneratedValue
    private Long ID;
    @NonNull
    @Column(name="question", length = 2048)
    private String question;
    @NonNull
    @Column(name="answer", length = 2048)
    private String answer;

    public Question(String question, String answer) {
        this.question = question;
        this.answer = answer;
    }
}
