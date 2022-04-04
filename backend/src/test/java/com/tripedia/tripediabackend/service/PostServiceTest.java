package com.tripedia.tripediabackend.service;

import com.tripedia.tripediabackend.dao.PostDao;
import com.tripedia.tripediabackend.exceptions.*;
import com.tripedia.tripediabackend.model.Post;
import com.tripedia.tripediabackend.model.Spot;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.test.annotation.Rollback;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PostServiceTest {

    @Resource
    private PostService postService;

    @Resource
    private PostDao postDao;

    @Test
    @Transactional
    @Rollback
    void addPost_noTitle() {
        Post post = new Post();
        post.setTitle("");
        assertThrows(PostEmptyTitleException.class, ()->this.postService.addPost(post));
    }

    @Test
    @Transactional
    @Rollback
    void addPost_normal() {
        Post post = new Post();
        post.setTitle("Pass the test");
        this.postService.addPost(post);
        String postTitle = this.postService.getPostById(27L).get().getTitle();
        assertEquals("Pass the test", postTitle);
    }

    @Test
    void getAllPost() {
        List<Post> allPosts = this.postService.getAllPost();
        int postNumbers = allPosts.size();
        assertEquals(19, postNumbers);
    }

    @Test
    void getPostById() {
        Long curPostId = 1L;
        String curTitle = this.postService.getPostById(curPostId).get().getTitle();
        assertEquals("Worth a visit, but....11111111111111111111111111111", curTitle);
    }

    @Test
    @Transactional
    @Rollback
    void deletePost() {
        Long curPostId = 1L;
        this.postService.deletePost(curPostId);
        Post curPost = this.postService.getPostById(curPostId).orElse(null);
        assertEquals(null, curPost);
    }

    @Test
    @Transactional
    @Rollback
    void updatePost_noId() {
        Long curPostId = 100L;
        assertThrows(EmptyResultDataAccessException.class, ()->this.postService.deletePost(curPostId));
    }

    @Test
    void assignSpot_noSpotId() {
        Long curPostId = 1L;
        Long curSpotId = 100L;
        assertThrows(SpotNotExistException.class, ()->this.postService.assignSpot(curPostId, curSpotId));
    }

    @Test
    @Transactional
    @Rollback
    void assignSpot_assignedSpotId() {
        Long curPostId = 1L;
        Long curSpotId = 1L;
        Post curPost = this.postService.assignSpot(curPostId, curSpotId);
        String curSpotAddressInPost = curPost.getSpot().getAddress();
        assertEquals("288 Bremner Boulevard, Toronto, ON", curSpotAddressInPost);
    }

    @Test
    @Transactional
    @Rollback
    void assignSpot_notAssignedSpotId() {
        Long curPostId = 1L;
        Long curSpotId = 5L;
        Post curPost = this.postService.assignSpot(curPostId, curSpotId);
        String curSpotAddressInPost = curPost.getSpot().getAddress();
        assertEquals("100 Sundance Rd, Banff, AB", curSpotAddressInPost);
    }

    @Test
    @Transactional
    @Rollback
    void assignUser_noUserId() {
        Long curPostId = 1L;
        Long curUserId = 100L;
        assertThrows(UserNotExistException.class, ()->this.postService.assignUser(curPostId, curUserId));
    }

    @Test
    @Transactional
    @Rollback
    void assignUser_withAssignedUser() {
        Long curPostId = 1L;
        Long curUserId = 1L;
        Post curPost = this.postService.assignUser(curPostId, curUserId);
        String curUserNameInPost = curPost.getUser().getUserName();
        assertEquals("nourah1992", curUserNameInPost);
    }

    @Test
    @Transactional
    @Rollback
    void assignUser_noAssignedUser() {
        Long curPostId = 1L;
        Long curUserId = 6L;
        Post curPost = this.postService.assignUser(curPostId, curUserId);
        String curUserNameInPost = curPost.getUser().getUserName();
        assertEquals("ziyi", curUserNameInPost);
    }

    @Test
    @Transactional
    @Rollback
    void assignContent() {
        Long curPostId = 1L;
        String content = "This is a comment";
        Post curPost = this.postService.assignContent(curPostId, content);
        String curContendInPost = curPost.getContent();
        assertEquals("This is a comment", curContendInPost);
    }
}