package com.tripedia.tripediabackend.exceptions;

public class ImageNotExistException extends RuntimeException {
    public ImageNotExistException(String msg){
        super(msg);
    }
}
