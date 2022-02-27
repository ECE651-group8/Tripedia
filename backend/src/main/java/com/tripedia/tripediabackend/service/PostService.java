package com.tripedia.tripediabackend.service;

import com.tripedia.tripediabackend.dao.PostDao;
import com.tripedia.tripediabackend.exceptions.PostEmptyTitleException;
import com.tripedia.tripediabackend.exceptions.PostNotExistException;
import com.tripedia.tripediabackend.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    private PostDao postDao;

    @Autowired
    public PostService(PostDao postDao) {
        this.postDao = postDao;
    }

    public Post addPost(Post post){
        if (post.getTitle().isEmpty()) {
            throw new PostEmptyTitleException("Post title can not be empty");
        }
        return postDao.save(post);
    }

    public List<Post> getAllPost() {
        return (List<Post>) postDao.findAll();
    }

    public Optional<Post> getPostById(Long postId) {
        return postDao.findById(postId);
    }

    public void deletePost(Long postId) {
        postDao.deleteById(postId);
    }

    public Post updatePost(Post post) {
        if (post.getPostId() == null || !postDao.existsById(post.getPostId())) {
            throw new PostNotExistException("Post cannot be found");
        }

        return postDao.save(post);
    }
}
