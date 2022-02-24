package com.tripedia.tripediabackend.apis;

import com.tripedia.tripediabackend.exceptions.InvalidPostException;
import com.tripedia.tripediabackend.model.Post;
import com.tripedia.tripediabackend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/post")
public class PostController {
    private PostService postService;

    @Autowired
    public PostController(PostService postService){
        this.postService = postService;
    }

    @GetMapping
    public List<Post> getAllPost() {
        return postService.getAllPost();
    }


    @RequestMapping("/{pid}")
    @GetMapping
    public Optional<Post> getPostById(@PathVariable("pid") Long postId) {
        return postService.getPostById(postId);
    }

    @RequestMapping("/add")
    @PostMapping
    public ResponseEntity<String> addPost(@RequestBody Post post) {
        try{
            post.setPostTime(Calendar.getInstance().getTime());
            post.setCreateTime(Calendar.getInstance().getTime());
            Post savedPost = postService.addPost(post);
            return ResponseEntity.ok("Added Post. " + savedPost.toString());
        } catch (InvalidPostException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @RequestMapping("/del")
    @PostMapping
    public void delPost(Long postId) {
        postService.deletePost(postId);
    }

    @RequestMapping("/update")
    @PostMapping
    public String updatePost(@RequestBody Post post) {
        postService.updatePost(post);

        return "Updated post";
    }
}
