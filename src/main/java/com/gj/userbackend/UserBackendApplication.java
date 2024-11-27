package com.gj.userbackend;

import org.junit.jupiter.api.Test;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.util.DigestUtils;

@SpringBootApplication
@MapperScan("com.gj.userbackend.mapper")
public class UserBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserBackendApplication.class, args);
    }
//    @Test
//    void testDigest(){
//        String newPassword = DigestUtils.md5DigestAsHex(("abcd"+"mypassweord").getBytes());
//        System.out.println(newPassword);
//    }



}
