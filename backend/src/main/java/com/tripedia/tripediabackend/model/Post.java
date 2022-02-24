package com.tripedia.tripediabackend.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long postId;

    @Column(unique = true, nullable = false)
    private String title;

    private Date createTime;

    private Date postTime;

    private Long visitorNum;

    public Post() {}

    public Post(Long postId, String title, Date createTime, Date postTime, Long visitorNum) {
        this.postId = postId;
        this.title = title;
        this.createTime = createTime;
        this.postTime = postTime;
        this.visitorNum = visitorNum;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getPostTime() {
        return postTime;
    }

    public void setPostTime(Date postTime) {
        this.postTime = postTime;
    }

    public Long getVisitorNum() {
        return visitorNum;
    }

    public void setVisitorNum(Long visitorNum) {
        this.visitorNum = visitorNum;
    }


    @Override
    public String toString() {
        return "Post{" +
                "postId=" + postId +
                ", title='" + title + '\'' +
                ", createTime=" + createTime +
                ", postTime=" + postTime +
                ", visitorNum=" + visitorNum +
                '}';
    }
}
