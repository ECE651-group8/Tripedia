package com.tripedia.tripediabackend.exceptions;

public class PostEmptyCommentException extends RuntimeException{
    public PostEmptyCommentException(String msg){
        super(msg);
    }
    
}