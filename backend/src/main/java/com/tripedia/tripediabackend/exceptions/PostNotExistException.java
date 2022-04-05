package com.tripedia.tripediabackend.exceptions;

public class PostNotExistException extends RuntimeException{
    public PostNotExistException(String msg){
        super(msg);
    }
}
