package com.tripedia.tripediabackend.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long postId;

    private boolean isBrief;

    private Date tripTime;

    @Column(unique = true, nullable = false)
    private String title;

    private Long visitorNum;

    private Date postTime;

    private Long cost;

    private String content;

    public Post() {}

    public Post(Long postId, boolean isBrief, Date tripTime, String title, Long visitorNum, Date postTime, Long cost, String content) {
        this.postId = postId;
        this.isBrief = isBrief;
        this.tripTime = tripTime;
        this.title = title;
        this.visitorNum = visitorNum;
        this.postTime = postTime;
        this.cost = cost;
        this.content = content;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public boolean isBrief() {
        return isBrief;
    }

    public void setBrief(boolean brief) {
        isBrief = brief;
    }

    public Date getTripTime() {
        return tripTime;
    }

    public void setTripTime(Date tripTime) {
        this.tripTime = tripTime;
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

    public Date getPostTime() {
        return postTime;
    }

    public void setPostTime(Date postTime) {
        this.postTime = postTime;
    }

    public Long getCost() {
        return cost;
    }

    public void setCost(Long cost) {
        this.cost = cost;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "Post{" +
                "postId=" + postId +
                ", isBrief=" + isBrief +
                ", tripTime=" + tripTime +
                ", title='" + title + '\'' +
                ", visitorNum=" + visitorNum +
                ", postTime=" + postTime +
                ", cost=" + cost +
                ", content='" + content + '\'' +
                '}';
    }
}
