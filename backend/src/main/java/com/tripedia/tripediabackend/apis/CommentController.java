package com.tripedia.tripediabackend.apis;

import com.tripedia.tripediabackend.exceptions.*;
import com.tripedia.tripediabackend.model.Comment;
import com.tripedia.tripediabackend.model.Post;
import com.tripedia.tripediabackend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Calendar;
import java.util.Optional;

@RestController
@RequestMapping("api/comment")
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {
    private CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public List<Comment> getAllComment() {
        return commentService.getAllComment();
    }

    @GetMapping
    @RequestMapping(path = "{id}")
    public Optional<Comment> getCommentById(@PathVariable("id") Long id) {
        return commentService.getCommentById(id);
    }

    @PostMapping
    @RequestMapping("/add")
    public ResponseEntity<String> addComment(@RequestBody Comment comment) {
        try {
            comment.setCommentDate(Calendar.getInstance().getTime());
            Comment savedComment = commentService.addComment(comment);
            return ResponseEntity.ok("Added Comment. " + savedComment.toString());
        } catch (InvalidPostException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping(path = "/del")
    public void delComment(@RequestBody Comment comment) {
        commentService.delComment(comment);
    }

    @DeleteMapping("/del/{id}")
    public void delCommentById(@PathVariable("id") Long id) {
        commentService.delCommentById(id);
    }

    @RequestMapping("/update")
    @PostMapping
    public String updateComment(@RequestBody Comment comment) {
        commentService.updateComment(comment);

        return "Updated comment";
    }

    @PostMapping(path = "assignpost/{cid}/{pid}")
    public ResponseEntity<String> assignPost(@PathVariable("cid") Long commentId,
                                             @PathVariable("pid") Long postId) {
        try {
            Comment updatedComment = commentService.assignPost(commentId, postId);
            return ResponseEntity.ok("Assigned post. " + updatedComment.toString());
        } catch (CommentNotExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (PostNotExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping(path = "assignuser/{cid}/{uid}")
    public ResponseEntity<String> assignUser(@PathVariable("cid") Long commentId,
                                             @PathVariable("uid") Long userId) {
        try {
            Comment updatedComment = commentService.assignUser(commentId, userId);
            return ResponseEntity.ok("Assigned user. " + updatedComment.toString());
        } catch (CommentNotExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (UserNotExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
