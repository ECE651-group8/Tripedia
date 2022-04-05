package com.tripedia.tripediabackend.service;

import com.tripedia.tripediabackend.dao.UserDao;
import com.tripedia.tripediabackend.exceptions.*;
import com.tripedia.tripediabackend.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.util.Assert;
import com.tripedia.tripediabackend.exceptions.UserNameExistsException;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserServiceTest {

    @Resource
    private UserService userService;

    @Resource
    private UserDao userDao;


    @Test
    @Transactional
    @Rollback
    void addUser_notExist() {
        User user = new User();
        user.setUserId(2L);
        user.setUserName("ziyi2");
        user.setPassword("open the door");
        user.setEmail("ziyi2@gmail.com");
        this.userService.addUser(user);
        Long currentUserId = this.userDao.findId(user.getUserName());
        assertEquals("ziyi2",(this.userService.getUser(currentUserId)).get().getUserName());
    }

    @Test
    @Transactional
    @Rollback
    void addUser_Exist() {
        User user = new User();
        user.setUserId(2L);
        user.setUserName("ziyi");
        user.setPassword("open the door");
        user.setEmail("ziyi@gmail.com");
        assertThrows(UserNameExistsException.class, () -> this.userService.addUser(user));
    }

    @Test
    @Transactional
    @Rollback
    void addUser_noUserName() {
        User user = new User();
        user.setUserId(2L);
        user.setUserName("");
        user.setPassword("open the door");
        user.setEmail("ziyi@gmail.com");
        assertThrows(UserNameEmptyException.class, () -> this.userService.addUser(user));
    }

    @Test
    @Transactional
    @Rollback
    void addUser_noPswd() {
        User user = new User();
        user.setUserId(2L);
        user.setUserName("ziyi2");
        user.setPassword("open the door");
        user.setEmail("ziyi@gmail.com");
        assertThrows(UserNameExistsException.class, () -> this.userService.login(user));
    }



    @Test
    void login_notExist() {
        User user = new User();
        user.setUserName("ziyi2");
        user.setPassword("open the door");
        user.setEmail("ziyi@gmail.com");
        assertThrows(UserNameExistsException.class, () -> this.userService.login(user));
    }

    @Test
    void login_wrongPswd() {
        User user = new User();
        user.setUserName("ziyi");
        user.setPassword("open the window");
        user.setEmail("ziyi@gmail.com");
        assertThrows(PasswordWrongException.class, () -> this.userService.login(user));
    }

    @Test
    void login_CorrectPswd() {
        User user = new User();
        user.setUserName("ziyi");
        user.setPassword("Test1234");
        user.setEmail("ziyi@gmail.com");
        User targetUser = this.userService.getUser(6L).get();
        User resultUser = this.userService.login(user);
        // If their userId are equal, then these two are the same.
        assertEquals(targetUser.getUserId(), resultUser.getUserId());
    }

    @Test
    void getAllUser() {
        List<User> allUsers = this.userService.getAllUser();
        int userNumbers = allUsers.size();
        assertEquals(userNumbers, 6);
    }

    @Test
    void getUser() {
        String username = "ziyi";
        Long currentUserId = this.userDao.findId(username);
        assertEquals("ziyi",(this.userService.getUser(currentUserId)).get().getUserName());
    }

}