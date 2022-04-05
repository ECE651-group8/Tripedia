package com.tripedia.tripediabackend.exceptions;

public class CommentNotExistException extends RuntimeException {
    public CommentNotExistException(String msg){
        super(msg);
    }
}
