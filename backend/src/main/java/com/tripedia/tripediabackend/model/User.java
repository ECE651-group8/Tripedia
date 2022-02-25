package com.tripedia.tripediabackend.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.UUID;


@Entity
@Table(name = "user")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;

    @Column(nullable = false, name = "username")
    private String userName;
    private String password;
    private String email;
    private String avator_url;
    private Long rating;
    private String profileBg_url;

//    @OneToMany(mappedBy = "user")
//    List<Post> posts;


    public User() {
    }

    public User(String userName, String password, String email, String avator_url, Long rating, String profileBg_url) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.avator_url = avator_url;
        this.rating = rating;
        this.profileBg_url = profileBg_url;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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

    public String getAvator_url() {
        return avator_url;
    }

    public void setAvator_url(String avator_url) {
        this.avator_url = avator_url;
    }

    public Long getRating() {
        return rating;
    }

    public void setRating(Long rating) {
        this.rating = rating;
    }

    public String getProfileBg_url() {
        return profileBg_url;
    }

    public void setProfileBg_url(String profileBg_url) {
        this.profileBg_url = profileBg_url;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", avator_url='" + avator_url + '\'' +
                ", rating=" + rating +
                ", profileBg_url='" + profileBg_url + '\'' +
                '}';
    }

}
