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

    @ManyToOne
    @JsonIgnoreProperties(value = {"image"})
    @JoinColumn(name = "spot_id")
    private Spot spot;

    public Image(){}

    public Image(Long imageId, String imageUrl, Post post, Spot spot) {
        this.imageId = imageId;
        this.imageUrl = imageUrl;
        this.post = post;
        this.spot = spot;
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

    public Spot getSpot() {
        return spot;
    }

    public void setSpot(Spot spot) {
        this.spot = spot;
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

        if (spot == null) {
            str += null;
        }
        else {
            str += spot;
        }

        str += '}';

        return str;
    }
}
