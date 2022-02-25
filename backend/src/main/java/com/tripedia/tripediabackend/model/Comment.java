package com.tripedia.tripediabackend.model;

import javax.persistence.*;

import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "comment")

public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long commentId;

    @Column(nullable = false)
    private Date CommentDate;


    private String CommentText;

    @Column (nullable = false)
    private Long PostId;
    @Column (nullable = false)
    private Long UserId;

    public Comment(){}

    public Comment(Long commentId, Date CommentDate, String CommentText, Long PostId, Long UserId){
        this.commentId = commentId;
        this.CommentDate = CommentDate;
        this.CommentText = CommentText;
        this.PostId = PostId;
        this.UserId = UserId;

    }

    public Long getcommentId() {
        return commentId;
    }

    public void setcommentId(Long commentId) {
        this.commentId = commentId;
    }

    public String getCommentText() {
        return CommentText;
    }

    public void setCommentText(String CommentText) {
        this.CommentText = CommentText;
    }

    public Date getCommentDate() {
        return CommentDate;
    }

    public void setCommentDate(Date CommentDate) {
        this.CommentDate = CommentDate;
    }

    public Long getPostId() {
        return PostId;
    }

    public void setPostId(Long PostId) {
        this.PostId = PostId;
    }

    public Long getUserId() {
        return commentId;
    }

    public void setUserId(Long UserId) {
        this.UserId = UserId;
    }

    @Override
    public String toString() {
        return "Post{" +
                "commentId=" + commentId +
                ", CommentDate='" + CommentDate + '\'' +
                ", CommentText='" + CommentText + '\'' +
                ", PostId=" + PostId +
                ", userId=" + UserId +
                '}';
    }









    
}
