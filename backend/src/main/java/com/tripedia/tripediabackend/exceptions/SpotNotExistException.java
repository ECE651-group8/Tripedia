package com.tripedia.tripediabackend.exceptions;

public class SpotNotExistException extends RuntimeException{
    public SpotNotExistException(String msg) {
        super(msg);
    }
}
