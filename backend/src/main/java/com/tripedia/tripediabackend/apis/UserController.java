package com.tripedia.tripediabackend.apis;

import com.tripedia.tripediabackend.exceptions.InvalidPostException;
import com.tripedia.tripediabackend.model.User;
import com.tripedia.tripediabackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    @PostMapping
    @RequestMapping("/add")
    public ResponseEntity<String> addUser(@RequestBody User user){
        try{
            User savedUser = userService.addUser(user);
            return ResponseEntity.ok("Added Post." + savedUser.toString());
        } catch (InvalidPostException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

//    @PostMapping
//    @RequestMapping("/find")
//    public ResponseEntity<String> getUser(@RequestBody User user){
//        try{
//            Optional<User> savedUser = userService.getUser(user);
//            return ResponseEntity.ok("Added Post." + savedUser.toString());
//        } catch (InvalidPostException e){
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//        }
//    }

    @RequestMapping("/del")
    @PostMapping
    public void delUser(@RequestBody User user){
        userService.delUser(user);
    }

    @RequestMapping("/update")
    @PostMapping
    public ResponseEntity<String> updateUser(@RequestBody User user){
        try{
            User savedUser = userService.updateUser(user);
            return ResponseEntity.ok("Updated Post." + savedUser.toString());
        } catch (InvalidPostException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

}
