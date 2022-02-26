package com.tripedia.tripediabackend.service;

import com.tripedia.tripediabackend.dao.PostDao;
import com.tripedia.tripediabackend.dao.SpotDao;
import com.tripedia.tripediabackend.exceptions.PostEmptyTitleException;
import com.tripedia.tripediabackend.exceptions.PostNotExistException;
import com.tripedia.tripediabackend.exceptions.SpotNotExistException;
import com.tripedia.tripediabackend.model.Post;
import com.tripedia.tripediabackend.model.Spot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    private PostDao postDao;
    private SpotDao spotDao;

    @Autowired
    public PostService(PostDao postDao, SpotDao spotDao) {
        this.postDao = postDao;
        this.spotDao = spotDao;
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

    public Post assignSpot(Long postId, Long spotId) {
       if (!postDao.existsById(postId)) {
            throw new PostNotExistException("Cannot find post ID" + postId);
       }

       if(!spotDao.existsById(spotId)) {
           throw new SpotNotExistException("Cannot find spot ID" + spotId);
       }

       Post post = getPostById(postId).get();
       Spot spot = spotDao.findById(spotId).get();

       post.setSpot(spot);
       return postDao.save(post);
    }
}
