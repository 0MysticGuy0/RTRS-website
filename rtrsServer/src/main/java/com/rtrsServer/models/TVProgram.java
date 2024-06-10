package com.rtrsServer.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Locale;

@Data
@Entity
@NoArgsConstructor
@Table(name="tv_programs")
public class TVProgram {
    @Id
    @GeneratedValue
    private Long ID;
    @NonNull
    private String name;
    @NonNull
    private Date time;

    @ManyToOne
    private TVChannel tvChannel;

    @Transient
    private static final SimpleDateFormat formatter = new SimpleDateFormat("dd.MM.yy, hh:mm");

    public TVProgram(String name, String time, TVChannel tvChannel) {
        this.name = name;
        try {
            this.time = formatter.parse(time);
        }catch (ParseException ex){
            this.time = null;
        }
        this.tvChannel = tvChannel;
    }

    public @NonNull Date getTime() {
        return time;
    }
}
