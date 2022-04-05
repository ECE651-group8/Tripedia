package com.tripedia.tripediabackend.service;

import com.tripedia.tripediabackend.dao.PostDao;
import com.tripedia.tripediabackend.dao.SpotDao;
import com.tripedia.tripediabackend.dao.UserDao;
import com.tripedia.tripediabackend.exceptions.PostEmptyTitleException;
import com.tripedia.tripediabackend.exceptions.PostNotExistException;
import com.tripedia.tripediabackend.exceptions.SpotNotExistException;
import com.tripedia.tripediabackend.exceptions.UserNotExistException;
import com.tripedia.tripediabackend.model.Post;
import com.tripedia.tripediabackend.model.Spot;
import com.tripedia.tripediabackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    private PostDao postDao;
    private SpotDao spotDao;
    private UserDao userDao;

    @Autowired
    public PostService(PostDao postDao, SpotDao spotDao, UserDao userDao) {
        this.postDao = postDao;
        this.spotDao = spotDao;
        this.userDao = userDao;
    }

    public Post addPost(Post post){
        if (post.getTitle().isEmpty() || post.getTitle() == null) {
            throw new PostEmptyTitleException("Post title can not be empty");
        }
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        // 格式化时间对象
        post.setPostTime(dateFormat.format(new Date()));
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
       spot.addPopularity();
       return postDao.save(post);
    }

    public Post assignUser(Long postId, Long userId) {
        if (!postDao.existsById(postId)) {
            throw new PostNotExistException("Cannot find post ID" + postId);
        }

        if(!userDao.existsById(userId)) {
            throw new UserNotExistException("Cannot find user ID" + userId);
        }

        Post post = getPostById(postId).get();
        User user = userDao.findById(userId).get();

        post.setUser(user);
        return postDao.save(post);
    }

    public Post assignContent(Long postId, String content) {
        if (!postDao.existsById(postId)) {
            throw new PostNotExistException("Cannot find post ID" + postId);
        }

        Post post = getPostById(postId).get();

        post.setContent(content);
        return postDao.save(post);
    }
}
