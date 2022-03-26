package com.tripedia.tripediabackend.exceptions;

public class UserNameExistsException extends RuntimeException {
    public UserNameExistsException(String msg){
        super(msg);
    }
}