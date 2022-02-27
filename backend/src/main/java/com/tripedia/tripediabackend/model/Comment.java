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

    public Comment(Long commentId, String commentText, Date commentDate) {
        this.commentId = commentId;
        CommentText = commentText;
        CommentDate = commentDate;
    }

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }

    public String getCommentText() {
        return CommentText;
    }

    public void setCommentText(String commentText) {
        CommentText = commentText;
    }

    public Date getCommentDate() {
        return CommentDate;
    }

    public void setCommentDate(Date commentDate) {
        CommentDate = commentDate;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "commentId=" + commentId +
                ", CommentText='" + CommentText + '\'' +
                ", CommentDate=" + CommentDate +
                '}';
    }
}
