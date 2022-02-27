package com.tripedia.tripediabackend.exceptions;

public class PostEmptyTitleException extends RuntimeException{

    public PostEmptyTitleException(String msg){
        super(msg);
    }

}
