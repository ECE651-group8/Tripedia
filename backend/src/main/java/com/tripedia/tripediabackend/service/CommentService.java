package com.tripedia.tripediabackend.service;
import com.tripedia.tripediabackend.dao.CommentDao;
import com.tripedia.tripediabackend.dao.PostDao;
import com.tripedia.tripediabackend.dao.UserDao;
import com.tripedia.tripediabackend.exceptions.*;
import com.tripedia.tripediabackend.model.Comment;
import com.tripedia.tripediabackend.model.Post;
import com.tripedia.tripediabackend.model.Spot;
import com.tripedia.tripediabackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private CommentDao commentDao;
    private PostDao postDao;
    private UserDao userDao;

    @Autowired
    public CommentService(CommentDao commentDao, PostDao postDao, UserDao userDao) {
        this.commentDao = commentDao;
        this.postDao = postDao;
        this.userDao = userDao;
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

    public Comment assignUser(Long commentId, Long userId) {
        if (!commentDao.existsById(commentId)) {
            throw new CommentNotExistException("Cannot find comment ID" + commentId);
        }

        if(!userDao.existsById(userId)) {
            throw new UserNotExistException("Cannot find user ID" + userId);
        }

        Comment comment = getCommentById(commentId).get();
        User user = userDao.findById(userId).get();

        comment.setUser(user);
        return commentDao.save(comment);
    }
}
