package com.rtrsServer.utility;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class SimplePasswordGenerator implements PasswordGenerator {
    private static final String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-*$#@";
    private final int length;

    public SimplePasswordGenerator(
            @Value("${passwordGenerator.passwordLength}") int length) {
        this.length = length;
    }


    @Override
    public String generate() {
        StringBuilder passwd = new StringBuilder();
        for(int i = 0; i<length;i++){
            passwd.append(
                    alphabet.charAt((int)(Math.random()*(alphabet.length()-1))));
        }
        return passwd.toString();
    }
}
