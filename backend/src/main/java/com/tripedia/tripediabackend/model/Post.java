package com.tripedia.tripediabackend.model;

import javax.persistence.*;

import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long postId;

    private String createTime;

    @Column(nullable = false, name = "title")
    private String title;

    private Long visitorNum;

    private String postTime;

    private UUID userId;

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getVisitorNum() {
        return visitorNum;
    }

    public void setVisitorNum(Long visitorNum) {
        this.visitorNum = visitorNum;
    }

    public String getPostTime() {
        return postTime;
    }

    public void setPostTime(String postTime) {
        this.postTime = postTime;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Post{" +
                "postId=" + postId +
                ", createTime='" + createTime + '\'' +
                ", title='" + title + '\'' +
                ", visitorNum=" + visitorNum +
                ", postTime='" + postTime + '\'' +
                ", userId=" + userId +
                '}';
    }
}
