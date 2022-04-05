package com.tripedia.tripediabackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long postId;

    private boolean isBrief;

    private String tripTime;

    @Column(unique = true, nullable = false)
    private String title;

    private Long visitorNum;

    private String postTime;

    private Long cost;

    @Lob
    @Column(columnDefinition = "text")
    private String content;

    @ManyToOne
    @JsonIgnoreProperties(value = { "posts", "images" })
    @JoinColumn(name = "spot_id")
    private Spot spot;

    @OneToMany(mappedBy = "post")
    @JsonIgnoreProperties(value = { "post", "spot", "user" })
    List<Image> images;

    @OneToMany(mappedBy = "post")
    @JsonIgnoreProperties(value = { "post", "user" })
    List<Comment> comments;

    @ManyToOne
    @JsonIgnoreProperties(value = { "posts", "comments", "images" })
    @JoinColumn(name = "user_id")
    private User user;

    public Post() {
    }

    public Post(boolean isBrief, String tripTime, String postTime, String title, Long visitorNum, Long cost,
            String content, Spot spot, List<Image> images, List<Comment> comments, User user) {
        this.isBrief = isBrief;
        this.tripTime = tripTime;
        this.title = title;
        this.visitorNum = visitorNum;
        this.cost = cost;
        this.content = content;
        this.spot = spot;
        this.images = images;
        this.comments = comments;
        this.user = user;
        this.postTime = postTime;
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

    public String getPostTime() {
        return postTime;
    }

    public void setPostTime(String postTime) {
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

    public void setBrief(boolean brief) {
        isBrief = brief;
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

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        String str = "Post{" +
                "postId=" + postId +
                ", isBrief=" + isBrief +
                ", tripTime=" + tripTime +
                ", title='" + title + '\'' +
                ", visitorNum=" + visitorNum +
                ", postTime=" + postTime +
                ", cost=" + cost +
                ", content='" + content + '\'';

        if (spot == null) {
            str += null;
        } else {
            str += spot.getSpotId().toString();
        }

        if (images == null) {
            str += null;
        } else {
            for (Image image : images) {
                str += image.getImageId();
            }
        }

        if (comments == null) {
            str += null;
        } else {
            for (Comment comment : comments) {
                str += comment.getCommentId();
            }
        }

        if (user == null) {
            str += null;
        } else {
            str += user.getUserId().toString();
        }

        str += '}';

        return str;
    }
}
