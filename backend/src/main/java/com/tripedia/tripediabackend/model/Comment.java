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

    private String CommentText;

    @Column(nullable = false)
    private Date CommentDate;

    public Comment(){}

    public Comment(Long commentId, Date CommentDate, String CommentText, Long PostId){
        this.commentId = commentId;
        this.CommentDate = CommentDate;
        this.CommentText = CommentText;
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

    @Override
    public String toString() {
        return "Post{" +
                "commentId=" + commentId +
                ", CommentDate='" + CommentDate + '\'' +
                ", CommentText='" + CommentText + '\'' +
                '}';
    }

}
