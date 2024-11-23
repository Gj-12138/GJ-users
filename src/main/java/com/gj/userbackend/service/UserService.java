package com.gj.userbackend.service;


import com.baomidou.mybatisplus.extension.service.IService;
import com.gj.userbackend.model.domain.User;

/**
* @author 14908
* @description 针对表【user(用户)】的数据库操作Service
* @createDate 2024-11-23 18:37:19
*/
public interface UserService extends IService<User> {
    /**
     * 用户注册
     *
     * @param userAccount   用户账户
     * @param userPassword  用户密码
     * @param checkPassword 校验密码
     * @param planetCode    星球编号
     * @return 新用户 id
     */
    long userRegister(String userAccount, String userPassword, String checkPassword, String planetCode);


}

