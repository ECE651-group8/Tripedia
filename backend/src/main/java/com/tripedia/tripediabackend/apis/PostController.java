package com.tripedia.tripediabackend.apis;

import com.tripedia.tripediabackend.exceptions.InvalidPostException;
import com.tripedia.tripediabackend.exceptions.PostNotExistException;
import com.tripedia.tripediabackend.exceptions.SpotNotExistException;
import com.tripedia.tripediabackend.exceptions.UserNotExistException;
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
@CrossOrigin(origins = "http://localhost:3000")
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
//            post.setPostTime(Calendar.getInstance().getTime());
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

    @GetMapping(path = "assignspot/{pid}/{sid}")
    public ResponseEntity<String> assignSpot(@PathVariable("pid") Long postId,
                                             @PathVariable("sid") Long spotId) {
        try {
            Post updatedPost = postService.assignSpot(postId, spotId);
            return ResponseEntity.ok("Assigned spot. " + updatedPost.toString());
        } catch (PostNotExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (SpotNotExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping(path = "assignuser/{pid}/{uid}")
    public ResponseEntity<String> assignUser(@PathVariable("pid") Long postId,
                                             @PathVariable("uid") Long userId) {
        try {
            Post updatedPost = postService.assignUser(postId, userId);
            return ResponseEntity.ok("Assigned user. " + updatedPost.toString());
        } catch (PostNotExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (UserNotExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @RequestMapping("/assigncontent/{pid}")
    @PostMapping
    public ResponseEntity<String> assignContent(@PathVariable("pid") Long postId,
                                             @RequestBody String content) {
        try{
            Post updatedPost = postService.assignContent(postId, content);
            return ResponseEntity.ok("Assigned content. " + updatedPost.toString());
        } catch (InvalidPostException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

}
