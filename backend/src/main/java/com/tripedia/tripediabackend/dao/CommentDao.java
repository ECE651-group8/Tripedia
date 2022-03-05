package com.tripedia.tripediabackend.dao;
import com.tripedia.tripediabackend.model.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentDao extends CrudRepository<Comment, Long> {
}