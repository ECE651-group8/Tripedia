package com.tripedia.tripediabackend.service;

import com.tripedia.tripediabackend.dao.UserDao;
import com.tripedia.tripediabackend.exceptions.UserNameEmptyException;
import com.tripedia.tripediabackend.exceptions.UserNotExistException;
import com.tripedia.tripediabackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public User addUser(User user){
        if (user.getUserName().isEmpty()){
            throw new UserNameEmptyException("User name can not be empty");
        }
        return userDao.save(user);
    }

    public List<User> getAllUser(){
        return (List<User>) userDao.findAll();
    }

    public Optional<User> getUser(User user){
        Long userId = user.getUserId();
        return userDao.findById(userId);
    }

    public void delAllUser(User user){
        userDao.deleteAll();
    }

    public void delUser(User user){
        if (user.getUserId() == null){
            throw new UserNotExistException("User cannot be found!");
        }
        userDao.delete(user);
    }

    public User updateUser(User user){
        if (user.getUserId() == null){
            throw new UserNotExistException("User cannot be found!");
        }
        return userDao.save(user);
    }

}
