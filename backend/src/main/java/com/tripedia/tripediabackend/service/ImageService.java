package com.tripedia.tripediabackend.service;
import com.tripedia.tripediabackend.dao.ImageDao;
import com.tripedia.tripediabackend.dao.PostDao;
import com.tripedia.tripediabackend.dao.SpotDao;
import com.tripedia.tripediabackend.exceptions.PostNotExistException;
import com.tripedia.tripediabackend.exceptions.SpotNotExistException;
import com.tripedia.tripediabackend.model.Image;
import com.tripedia.tripediabackend.model.Post;
import com.tripedia.tripediabackend.model.Spot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tripedia.tripediabackend.exceptions.PostEmptyImageException;
import com.tripedia.tripediabackend.exceptions.ImageNotExistException;

import java.util.List;
import java.util.Optional;

@Service
public class ImageService {
    private ImageDao imageDao;
    private SpotDao spotDao;
    private PostDao postDao;

    @Autowired
    public ImageService(ImageDao imageDao) {
        this.imageDao = imageDao;
    }

    public Image addImage(Image image) {
        if (image.getImageUrl().isEmpty()) {
            throw new PostEmptyImageException("Image name can not be empty");
        }

        return imageDao.save(image);
    }

    public List<Image> getAllImage() {
        return (List<Image>) imageDao.findAll();
    }

    public Optional<Image> getImageById(Long imageId) {
        return imageDao.findById(imageId);
    }

    public void delImage(Image image) {
        imageDao.delete(image);
    }

    public void delImageById(Long id) {
        imageDao.deleteById(id);
    }

    public Image updateImage(Image image) {
        if (image.getImageId() == null || !imageDao.existsById(image.getImageId())) {
            throw new ImageNotExistException("Image cannot be found");
        }

        return imageDao.save(image);
    }

    public Image assignSpot(Long imageId, Long spotId) {
        if (!imageDao.existsById(imageId)) {
            throw new ImageNotExistException("Cannot find image ID" + imageId);
        }

        if(!spotDao.existsById(spotId)) {
            throw new SpotNotExistException("Cannot find spot ID" + spotId);
        }

        Image image = getImageById(imageId).get();
        Spot spot = spotDao.findById(spotId).get();

        image.setSpot(spot);
        return imageDao.save(image);
    }

    public Image assignPost(Long imageId, Long postId) {
        if (!imageDao.existsById(imageId)) {
            throw new ImageNotExistException("Cannot find image ID" + imageId);
        }

        if(!spotDao.existsById(postId)) {
            throw new PostNotExistException("Cannot find post ID" + postId);
        }

        Image image = getImageById(imageId).get();
        Post post = postDao.findById(postId).get();

        image.setPost(post);
        return imageDao.save(image);
    }
}
