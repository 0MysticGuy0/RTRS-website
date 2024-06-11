package com.rtrsServer.utility;

import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

import java.util.Properties;

public class MailHelper {
    public void sendPassword(String receiver, String password){
        try {
            String stringSenderEmail = "bychkovskiyvlad05@gmail.com";
            String stringPasswordSenderEmail = "rqff ppuo ggse ekfu";

            String stringHost = "smtp.gmail.com";

            Properties properties = System.getProperties();

            properties.put("mail.smtp.host", stringHost);
            properties.put("mail.smtp.port", "465");
            properties.put("mail.smtp.ssl.enable", "true");
            properties.put("mail.smtp.auth", "true");

            Session session = Session.getDefaultInstance(properties, new Authenticator() {
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(stringSenderEmail, stringPasswordSenderEmail);
                }
            });
            System.out.println("-=-=-=-=-| MAIL SESSION CREATED");

            Message mimeMessage = new MimeMessage(session);
            mimeMessage.setFrom(new InternetAddress(stringSenderEmail));
            mimeMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(receiver));

            mimeMessage.setSubject("Данные для входа на сайт диплом-РТРС");
            mimeMessage.setText("Добрый день!\nВаши данные для входа:\n\nemail: "+receiver+"\npassword: "+password);

            Thread thread = new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        Transport.send(mimeMessage);
                        System.out.println("=-=--=-=-=-=|PASSWORD MAIL SENDED to "+receiver);
                    } catch (MessagingException e) {
                        e.printStackTrace();
                    }
                }
            });
            thread.start();

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
