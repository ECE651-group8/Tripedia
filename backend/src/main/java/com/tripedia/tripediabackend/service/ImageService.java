package com.tripedia.tripediabackend.service;
import com.tripedia.tripediabackend.dao.ImageDao;
import com.tripedia.tripediabackend.dao.PostDao;
import com.tripedia.tripediabackend.dao.SpotDao;
import com.tripedia.tripediabackend.dao.UserDao;
import com.tripedia.tripediabackend.exceptions.*;
import com.tripedia.tripediabackend.model.Image;
import com.tripedia.tripediabackend.model.Post;
import com.tripedia.tripediabackend.model.Spot;
import com.tripedia.tripediabackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImageService {
    private ImageDao imageDao;
    private PostDao postDao;
    private SpotDao spotDao;
    private UserDao userDao;

    @Autowired
    public ImageService(ImageDao imageDao, PostDao postDao, SpotDao spotDao, UserDao userDao) {
        this.imageDao = imageDao;
        this.postDao = postDao;
        this.spotDao = spotDao;
        this.userDao = userDao;
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

        if(!postDao.existsById(postId)) {
            throw new PostNotExistException("Cannot find post ID" + postId);
        }

        Image image = getImageById(imageId).get();
        Post post = postDao.findById(postId).get();

        image.setPost(post);
        return imageDao.save(image);
    }

    public Image assignUser(Long imageId, Long userId) {
        if (!imageDao.existsById(imageId)) {
            throw new ImageNotExistException("Cannot find image ID" + imageId);
        }

        if(!userDao.existsById(userId)) {
            throw new UserNotExistException("Cannot find user ID" + userId);
        }

        Image image = getImageById(imageId).get();
        User user = userDao.findById(userId).get();

        image.setUser(user);
        return imageDao.save(image);
    }
}
