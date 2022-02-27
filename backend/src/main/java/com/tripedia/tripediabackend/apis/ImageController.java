package com.tripedia.tripediabackend.apis;

import com.tripedia.tripediabackend.exceptions.*;
import com.tripedia.tripediabackend.model.Image;
import com.tripedia.tripediabackend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/image")
public class ImageController {
    private ImageService imageService;

    @Autowired
    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping

    public List<Image> getAllImage() {
        return imageService.getAllImage();
    }

    @GetMapping
    @RequestMapping(path = "{id}")
    public Optional<Image> getImageById(@PathVariable("id") Long id) {
        return imageService.getImageById(id);
    }

    @PostMapping
    @RequestMapping("/add")
    public ResponseEntity<String> addImage(@RequestBody Image image) {
        try {

            Image savedImage = imageService.addImage(image);
            return ResponseEntity.ok("Added Image. " + savedImage.toString());
        } catch (InvalidPostException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping(path = "/del")
    public void delImage(@RequestBody Image image) {
        imageService.delImage(image);
    }

    @DeleteMapping("/del/{id}")
    public void delImageById(@PathVariable("id") Long id) {
        imageService.delImageById(id);
    }

    @RequestMapping("/update")
    @PostMapping
    public String updateImage(@RequestBody Image image) {
        imageService.updateImage(image);

        return "Updated image";
    }

}
