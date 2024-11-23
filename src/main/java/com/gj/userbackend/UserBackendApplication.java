package com.gj.userbackend;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.gj.userbackend.mapper")
public class UserBackendApplication {

    public static void main(String[] args) {

        SpringApplication.run(UserBackendApplication.class, args);
    }
}
