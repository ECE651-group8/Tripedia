package com.tripedia.tripediabackend.exceptions;

public class PasswordNotExistException extends RuntimeException {
    public PasswordNotExistException(String msg){
        super(msg);
    }
}
