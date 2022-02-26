package com.tripedia.tripediabackend.service;
import com.tripedia.tripediabackend.dao.CommentDao;
import com.tripedia.tripediabackend.dao.PostDao;
import com.tripedia.tripediabackend.exceptions.PostNotExistException;
import com.tripedia.tripediabackend.exceptions.SpotNotExistException;
import com.tripedia.tripediabackend.model.Comment;
import com.tripedia.tripediabackend.model.Post;
import com.tripedia.tripediabackend.model.Spot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tripedia.tripediabackend.exceptions.PostEmptyCommentException;
import com.tripedia.tripediabackend.exceptions.CommentNotExistException;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private CommentDao commentDao;
    private PostDao postDao;

    @Autowired
    public CommentService(CommentDao commentDao) {
        this.commentDao = commentDao;
    }

    public Comment addComment(Comment comment) {
        if (comment.getCommentText().isEmpty()) {
            throw new PostEmptyCommentException("Comment name can not be empty");
        }

        return commentDao.save(comment);
    }

    public List<Comment> getAllComment() {
        return (List<Comment>) commentDao.findAll();
    }

    public Optional<Comment> getCommentById(Long commentId) {
        return commentDao.findById(commentId);
    }

    public void delComment(Comment comment) {
        commentDao.delete(comment);
    }

    public void delCommentById(Long id) {
        commentDao.deleteById(id);
    }

    public Comment updateComment(Comment comment) {
        if (comment.getCommentId() == null || !commentDao.existsById(comment.getCommentId())) {
            throw new CommentNotExistException("Comment cannot be found");
        }

        return commentDao.save(comment);
    }

    public Comment assignPost(Long commentId, Long postId) {
        if (!commentDao.existsById(commentId)) {
            throw new CommentNotExistException("Cannot find comment ID" + commentId);
        }

        if(!postDao.existsById(postId)) {
            throw new SpotNotExistException("Cannot find post ID" + postId);
        }

        Comment comment = getCommentById(commentId).get();
        Post post = postDao.findById(postId).get();

        comment.setPost(post);
        return commentDao.save(comment);
    }
}
