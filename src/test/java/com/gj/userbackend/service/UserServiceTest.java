package com.gj.userbackend.service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

@SpringBootTest
class UserServiceTest {

    @Resource
    private UserService userService;

//    @Test
//    void  testAddUser(){
//        User user = new User();
//        user.setUsername("gj");
//        user.setUserAccount("123");
//        user.setAvatarUrl("https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png");
//        user.setGender(0);
//        user.setUserPassword("xxx");
//        user.setPhone("123");
//        user.setEmail("123");
//       boolean result = userService.save(user);
//        System.out.println(user.getId());
//        Assertions.assertTrue(result);
//    }
    /**
     * 测试用户注册
     */
    @Test
    void userRegister() {
        String userAccount = "yupi ";
        String userPassword = "12345678";
        String checkPassword = "12312345678";
        String planetCode = "1";
        long result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
        Assertions.assertEquals(-1, result);
//        userAccount = "yu";
//        result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
//        Assertions.assertEquals(-1, result);
//        userAccount = "yupi";
//        userPassword = "123456";
//        result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
//        Assertions.assertEquals(-1, result);
//        userAccount = "yu pi";
//        userPassword = "12345678";
//        result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
//        Assertions.assertEquals(-1, result);
//        checkPassword = "123456789";
//        result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
//        Assertions.assertEquals(-1, result);
        userAccount = "dogYupipi";
        checkPassword = "12345678";
        planetCode = "3";
        result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
        Assertions.assertEquals(-1, result);
        userAccount = "yupi";
        result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
        Assertions.assertEquals(-1, result);
    }
}