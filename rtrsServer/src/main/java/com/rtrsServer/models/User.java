package com.rtrsServer.models;

import com.rtrsServer.utility.MyPasswordEncryptor;
import com.rtrsServer.utility.SimplePasswordGenerator;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@Table(name="users")
public class User {
    @NonNull
    private String name;
    @Id
    private String email;
    private String gender;
    private String phone_number;
    private String address;
    private String password;

    public User(String name, String email, String gender, String phone_number, String address) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.phone_number = phone_number;
        this.address = address;
    }

    public @NonNull String getEmail() {
        return email;
    }

    @Transient
    private static MyPasswordEncryptor passwordEncryptor = new MyPasswordEncryptor();
    public void setPassword(String password) {
        this.password = passwordEncryptor.encrypt(password);
    }
    public void generatePassword(){
        SimplePasswordGenerator passwordGenerator = new SimplePasswordGenerator(10);
        setPassword(passwordGenerator.generate());
        System.out.println("-=-=-| GENERATED PASSWORD: "+this.password);
    }

    public String getPassword() {
        return password;
    }
}
