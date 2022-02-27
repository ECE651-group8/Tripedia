package com.tripedia.tripediabackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "spot")
public class Spot {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long spotId;

    @Column(nullable = false, name = "address")
    private String address;

    private Long popularity;

    @Column(nullable = false, name = "spot_name")
    private String spotName;

    @Column(nullable = false, name = "introduction")
    private String introduction;

    @OneToMany(mappedBy = "spot")
    @JsonIgnoreProperties(value = {"spot"})
    List<Post> posts;

    public Spot(){}

    public Spot(Long spotId, String address, Long popularity, String spotName, String introduction, List<Post> posts) {
        this.spotId = spotId;
        this.address = address;
        this.popularity = popularity;
        this.spotName = spotName;
        this.introduction = introduction;
        this.posts = posts;
    }

    public Long getSpotId() {
        return spotId;
    }

    public void setSpotId(Long spotId) {
        this.spotId = spotId;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public String getSpotName() {
        return spotName;
    }

    public void setSpotName(String spotName) {
        this.spotName = spotName;
    }

    public Long getPopularity() {
        return popularity;
    }

    public void setPopularity(Long popularity) {
        this.popularity = popularity;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }

    @Override
    public String toString() {
        return "Spot{" +
                "spotId=" + spotId +
                ", address='" + address + '\'' +
                ", popularity=" + popularity +
                ", spotName='" + spotName + '\'' +
                ", introduction='" + introduction + '\'' +
                ", posts=" + posts +
                '}';
    }
}
