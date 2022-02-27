package com.tripedia.tripediabackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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

    @ManyToOne
    @JsonIgnoreProperties(value = {"image"})
    @JoinColumn(name = "post_id")
    private Post post;

    public Image(){}

    public Image(Long imageId, String imageUrl, Spot spot, Post post, User user) {
        this.imageId = imageId;
        this.imageUrl = imageUrl;
        this.post = post;
    }

    public Long getImageId() {
        return imageId;
    }

    public void setImageId(Long imageId) {
        this.imageId = imageId;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }


    @Override
    public String toString() {
        String str = "Image{" +
                "imageId=" + imageId +
                ", imageUrl='" + imageUrl + '\'';

        if (post == null) {
            str += null;
        }
        else {
            str += post;
        }

        str += '}';

        return str;
    }
}
