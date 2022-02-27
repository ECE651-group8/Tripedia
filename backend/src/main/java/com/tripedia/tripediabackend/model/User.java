package com.tripedia.tripediabackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.UUID;


@Entity
@Table(name = "user")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;

    private Date signTime;

    private String introduction;

    private String city;

    @Column(nullable = false, name = "username")
    private String userName;

    private String password;

    private String email;

    private String avatarId;

    private Long rating;

    private String profileBgId;

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties(value = {"user"})
    List<Post> posts;

    public User() {
    }

    public User(Long userId, Date signTime, String introduction, String city, String userName, String password, String email, String avatarId, Long rating, String profileBgId, List<Post> posts, List<Comment> comments, List<Image> images) {
        this.userId = userId;
        this.signTime = signTime;
        this.introduction = introduction;
        this.city = city;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.avatarId = avatarId;
        this.rating = rating;
        this.profileBgId = profileBgId;
        this.posts = posts;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Date getSignTime() {
        return signTime;
    }

    public void setSignTime(Date signTime) {
        this.signTime = signTime;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAvatarId() {
        return avatarId;
    }

    public void setAvatarId(String avatarId) {
        this.avatarId = avatarId;
    }

    public Long getRating() {
        return rating;
    }

    public void setRating(Long rating) {
        this.rating = rating;
    }

    public String getProfileBgId() {
        return profileBgId;
    }

    public void setProfileBgId(String profileBgId) {
        this.profileBgId = profileBgId;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", signTime=" + signTime +
                ", introduction='" + introduction + '\'' +
                ", city='" + city + '\'' +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", avatarId='" + avatarId + '\'' +
                ", rating=" + rating +
                ", profileBgId='" + profileBgId + '\'' +
                ", posts=" + posts +
                '}';
    }
}
