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
    @JsonIgnoreProperties(value = {"spot", "images", "comments", "user"})
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne
    @JsonIgnoreProperties(value = {"posts", "images"})
    @JoinColumn(name = "spot_id")
    private Spot spot;

    @ManyToOne
    @JsonIgnoreProperties(value = {"posts", "comments", "images"})
    @JoinColumn(name = "user_id")
    private User user;

    public Image(){}

    public Image(Long imageId, String imageUrl, Post post, Spot spot, User user) {
        this.imageId = imageId;
        this.imageUrl = imageUrl;
        this.post = post;
        this.spot = spot;
        this.user = user;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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

        if (user == null) {
            str += null;
        }
        else {
            str += user;
        }

        str += '}';

        return str;
    }
}
