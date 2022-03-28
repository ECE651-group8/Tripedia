package com.tripedia.tripediabackend.service;

import com.tripedia.tripediabackend.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserServiceTest {

    @Resource
    private UserService userService;

    @Test
    @Transactional
    @Rollback
    void addUser() {
        User user = new User();
//        user.setUserId();
    }

    @Test
    void login() {
    }

    @Test
    void getAllUser() {
    }

    @Test
    void getUser() {
    }

    @Test
    void delAllUser() {
    }

    @Test
    void delUser() {
    }

    @Test
    void updateUser() {
    }
}