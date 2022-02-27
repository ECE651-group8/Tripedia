package com.tripedia.tripediabackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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

    @ManyToOne
    @JsonIgnoreProperties(value = {"comment"})
    @JoinColumn(name = "post_id")
    private Post post;

    public Comment(){}

    public Comment(Long commentId, String commentText, Date commentDate, Post post, User user) {
        this.commentId = commentId;
        CommentText = commentText;
        CommentDate = commentDate;
        this.post = post;
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

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "commentId=" + commentId +
                ", CommentText='" + CommentText + '\'' +
                ", CommentDate=" + CommentDate +
                ", post=" + post +
                '}';
    }
}
