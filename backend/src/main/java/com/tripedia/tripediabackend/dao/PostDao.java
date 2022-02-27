package com.tripedia.tripediabackend.dao;

import com.tripedia.tripediabackend.model.Post;
import org.springframework.data.repository.CrudRepository;

public interface PostDao extends CrudRepository<Post, Long> {
}
