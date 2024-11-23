package com.gj.userbackend.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.gj.userbackend.mapper.UserMapper;
import com.gj.userbackend.model.domain.User;
import com.gj.userbackend.service.UserService;
import org.springframework.stereotype.Service;

/**
* @author 14908
* @description 针对表【user(用户)】的数据库操作Service实现
* @createDate 2024-11-23 18:37:19
*/

@Service

public class UserServiceImpl extends ServiceImpl<UserMapper, User>
    implements UserService{

}




