package com.tripedia.tripediabackend.exceptions;

public class UserNameEmptyException extends RuntimeException{
    public UserNameEmptyException(String msg) {
        super(msg);
    }
}
