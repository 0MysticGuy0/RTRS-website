package com.rtrsServer.models;

import com.rtrsServer.services.AppealStatusServiceImpl;
import com.rtrsServer.services.AppealTypeServiceImpl;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@Table(name="appeals")
public class Appeal {
    @Id
    @GeneratedValue
    private Long ID;
    @NonNull
    private String content;
    @NonNull
    private String email;

    private Date time;
    private String address;
    @ManyToOne
    private AppealStatus status;
    @ManyToOne
    private AppealType type;

    public Appeal(String content, String email, Date time, String address, AppealStatus status, AppealType type) {
        this.content = content;
        this.email = email;
        this.time = time;
        this.address = address;
        this.status = status;
        this.type = type;
    }

    public @NonNull String getEmail() {
        return email;
    }
}
