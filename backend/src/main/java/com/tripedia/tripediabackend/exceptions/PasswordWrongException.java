package com.tripedia.tripediabackend.exceptions;

public class PasswordWrongException extends RuntimeException {
    public PasswordWrongException(String msg){
        super(msg);
    }
}