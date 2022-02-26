package com.tripedia.tripediabackend.model;

import javax.persistence.*;

import java.util.Date;

@Entity
@Table(name = "image")

public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long imageId;

    @Column(nullable = false)

    private String imageurl;


    public Image(){}

    public Image(Long imageId, String imageurl){
        this.imageId = imageId;
        this.imageurl = imageurl;
    }

    public Long getimageId() {
        return imageId;
    }

    public void setimageId(Long imageId) {
        this.imageId = imageId;
    }

    public String getimageurl() {
        return imageurl;
    }

    public void setimageurl(String imageurl) {
        this.imageurl = imageurl;
    }

    @Override
    public String toString() {
        return "Post{" +
                "imageId=" + imageId +
                ", imageurl='" + imageurl + '\'' +
                '}';
    }
    
}
