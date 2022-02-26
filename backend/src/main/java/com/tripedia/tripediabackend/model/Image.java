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
    private String imageUrl;

    public Image(){}

    public Image(Long imageId, String imageUrl){
        this.imageId = imageId;
        this.imageUrl = imageUrl;
    }

    public Long getimageId() {
        return imageId;
    }

    public void setimageId(Long imageId) {
        this.imageId = imageId;
    }

    public String getimageUrl() {
        return imageUrl;
    }

    public void setimageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "Post{" +
                "imageId=" + imageId +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
    
}
