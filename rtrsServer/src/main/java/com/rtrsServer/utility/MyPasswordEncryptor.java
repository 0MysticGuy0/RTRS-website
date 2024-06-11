package com.rtrsServer.utility;

public class MyPasswordEncryptor implements Encryptor {

    private final int KEY = 3;
    @Override
    public String encrypt(String text) {
        StringBuffer res = new StringBuffer();
        int localKey = text.length()%KEY;
        for(int i = 0; i < text.length(); i++){
            res.append((char)(text.charAt(i)+localKey));
        }
        return res.toString();
    }

    @Override
    public String decrypt(String text) {
        StringBuffer res = new StringBuffer();
        int localKey = text.length()%KEY;
        for(int i = 0; i < text.length(); i++){
            res.append((char)(text.charAt(i)-localKey));
        }
        return res.toString();
    }
}
