package com.tripedia.tripediabackend.service;

import com.tripedia.tripediabackend.dao.UserDao;
import com.tripedia.tripediabackend.exceptions.UserNameEmptyException;
import com.tripedia.tripediabackend.exceptions.UserNotExistException;
import com.tripedia.tripediabackend.exceptions.PasswordNotExistException;
import com.tripedia.tripediabackend.exceptions.UserNameExistsException;
import com.tripedia.tripediabackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    @Autowired
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public User addUser(User user){
        if (user.getUserName().isEmpty()){
            throw new UserNameEmptyException("User name can not be empty");
        }
        if (user.getPassword() == null){
            throw new PasswordNotExistException("User Password cannot be found!");
        }
        Long currentUserId = userDao.findId(user.getUserName());
        if (currentUserId == null){
            // 定义时间格式化对象和定义格式化样式
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            // 格式化时间对象
            user.setSignTime(dateFormat.format(new Date()));
            String encodedPswd = this.passwordEncoder.encode(user.getPassword());
            user.setPassword(encodedPswd);
            return userDao.save(user);
        } else {
            throw new UserNameExistsException("User Name is existed!");
        }
    }

    public Long login(User user){
        if (user.getUserName().isEmpty()){
            throw new UserNameEmptyException("User name can not be empty");
        }
        if (user.getPassword() == null){
            throw new PasswordNotExistException("User Password cannot be found!");
        }
        Long currentUserId = userDao.findId(user.getUserName());
        if (currentUserId == null){
            throw new UserNameExistsException("User Name is not existed!");
        } else {
            if (this.passwordEncoder.matches(user.getPassword(), userDao.findPswd(currentUserId))){
                return currentUserId;
            }
            else {
                throw new UserNameExistsException("User Password is not matched!");
            }
        }
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
