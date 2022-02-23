package com.tripedia.tripediabackend.apis;

import com.tripedia.tripediabackend.exceptions.InvalidPostException;
import com.tripedia.tripediabackend.model.Post;
import com.tripedia.tripediabackend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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


    @PostMapping
    @RequestMapping("/add")
    public ResponseEntity<String> addPost(@RequestBody Post post) {
        try{
            Post savedPost = postService.addPost(post);
            return ResponseEntity.ok("Added Post. " + savedPost.toString());
        } catch (InvalidPostException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @RequestMapping("/del")
    @PostMapping
    public void delPost(@RequestBody Post post) {
        postService.delPost(post);
    }

    @RequestMapping("/update")
    @PostMapping
    public String updatePost(@RequestBody Post post) {
        postService.updatePost(post);

        return "Updated post";
    }
}
