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

    @ManyToOne
    @JoinColumn(name = "spot_id")
    private Spot spot;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    public Image(){}

    public Image(Long imageId, String imageUrl, Spot spot, Post post) {
        this.imageId = imageId;
        this.imageUrl = imageUrl;
        this.spot = spot;
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

    public Spot getSpot() {
        return spot;
    }

    public void setSpot(Spot spot) {
        this.spot = spot;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    @Override
    public String toString() {
        return "Image{" +
                "imageId=" + imageId +
                ", imageUrl='" + imageUrl + '\'' +
                ", spot=" + spot +
                ", post=" + post +
                '}';
    }
}
