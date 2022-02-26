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

    private Date createTime;

    private Long visitorNum;

    private Date postTime;

    private Long cost;

    @ManyToOne
    @JoinColumn(name = "spot_id")
    private Spot spot;



    public Post() {}

    public Post(Long postId, boolean isBrief, Date tripTime, Long cost, String title, Date createTime, Date postTime, Long visitorNum, Spot spot) {
        this.postId = postId;
        this.isBrief = isBrief;
        this.tripTime = tripTime;
        this.cost = cost;
        this.title = title;
        this.createTime = createTime;
        this.postTime = postTime;
        this.visitorNum = visitorNum;
        this.spot = spot;
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

    public boolean isBrief() {
        return isBrief;
    }

    public void setBreif(boolean breif) {
        isBrief = breif;
    }

    public Date getTripTime() {
        return tripTime;
    }

    public void setTripTime(Date tripTime) {
        this.tripTime = tripTime;
    }

    public Long getCost() {
        return cost;
    }

    public void setCost(Long cost) {
        this.cost = cost;
    }

    public Spot getSpot() {
        return spot;
    }

    public void setSpot(Spot spot) {
        this.spot = spot;
    }

    @Override
    public String toString() {
        return "Post{" +
                "postId=" + postId +
                ", isBrief=" + isBrief +
                ", tripTime=" + tripTime +
                ", cost=" + cost +
                ", title='" + title + '\'' +
                ", createTime=" + createTime +
                ", postTime=" + postTime +
                ", visitorNum=" + visitorNum +
                ", spot=" + spot +
                '}';
    }
}
