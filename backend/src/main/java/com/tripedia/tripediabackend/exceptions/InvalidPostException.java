package com.tripedia.tripediabackend.exceptions;

public class InvalidPostException extends RuntimeException {
    public InvalidPostException(String msg){
        super(msg);
    }
}
