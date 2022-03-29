package com.tripedia.tripediabackend.service;

import com.tripedia.tripediabackend.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.util.Assert;

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
        user.setUserId(2L);
        user.setUserName("Kyrie");
        user.setPassword("open the door");
        user.setEmail("kyrie@gmail.com");
        this.userService.addUser(user);
//        assertEquals("Kyrie",this.userService.getUser());
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

    @Test
    void testAddUser() {
    }

    @Test
    void testLogin() {
    }

    @Test
    void testGetAllUser() {
    }

    @Test
    void testGetUser() {
    }

    @Test
    void testDelAllUser() {
    }

    @Test
    void testDelUser() {
    }

    @Test
    void testUpdateUser() {
    }
}