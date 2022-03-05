package com.tripedia.tripediabackend.exceptions;

public class PostEmptyImageException extends RuntimeException {
    public PostEmptyImageException(String msg){
        super(msg);
    }
}