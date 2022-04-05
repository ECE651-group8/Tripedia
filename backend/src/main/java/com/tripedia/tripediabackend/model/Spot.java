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
    @Lob
    @Column(columnDefinition = "text")
    private String introduction;

    @Column(nullable = false, name = "mapUrl")
    private String mapUrl;

    @Column(nullable = false, name = "time")
    private String time;

    @Column(nullable = false, name = "province")
    private String province;

    @OneToMany(mappedBy = "spot")
    @JsonIgnoreProperties(value = { "spot", "images", "comments", "user" })
    List<Post> posts;

    @OneToMany(mappedBy = "spot")
    @JsonIgnoreProperties(value = { "spot", "post", "user" })
    List<Image> images;

    public Spot() {
    }

    public Spot(Long spotId, String address, Long popularity, String province, String time, String mapUrl,
            String spotName, String introduction,
            List<Post> posts, List<Image> images) {
        this.spotId = spotId;
        this.address = address;
        this.popularity = popularity;
        this.spotName = spotName;
        this.introduction = introduction;
        this.posts = posts;
        this.images = images;
        this.mapUrl = mapUrl;
        this.province = province;
        this.time = time;
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

    public String getMapUrl() {
        return mapUrl;
    }

    public void setMapUrl(String mapUrl) {
        this.mapUrl = mapUrl;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
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

    public void addPopularity() {
        this.popularity += 1;
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

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    @Override
    public String toString() {
        String str = "Spot{" +
                "spotId=" + spotId +
                ", address='" + address + '\'' +
                ", popularity=" + popularity +
                ", spotName='" + spotName + '\'' +
                ", introduction='" + introduction + '\'';

        if (posts == null) {
            str += null;
        } else {
            for (Post post : posts) {
                str += post.getPostId();
            }
        }

        if (images == null) {
            str += null;
        } else {
            for (Image image : images) {
                str += image.getImageId();
            }
        }

        str += '}';

        return str;
    }
}
