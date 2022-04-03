package com.tripedia.tripediabackend.dao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserDaoTest {

    @Autowired
    private UserDao userDao;

    @Test
    void findId_withoutName() {
        String name = "ziyi";
        Long userIdWithName = userDao.findId(name);
        assertEquals(null, userIdWithName);
    }

    @Test
    void findId_withExistName() {
        String name = "nourah1992";
        Long userIdWithName = userDao.findId(name);
        assertEquals(1L, userIdWithName);
    }

}