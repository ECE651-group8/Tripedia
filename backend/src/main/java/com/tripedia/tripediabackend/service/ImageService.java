package com.tripedia.tripediabackend.service;
import com.tripedia.tripediabackend.dao.ImageDao;
import com.tripedia.tripediabackend.model.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tripedia.tripediabackend.exceptions.PostEmptyImageException;
import com.tripedia.tripediabackend.exceptions.ImageNotExistException;

import java.util.List;
import java.util.Optional;

@Service
public class ImageService {
    private ImageDao imageDao;

    @Autowired
    public ImageService(ImageDao imageDao) {
        this.imageDao = imageDao;
    }

    public Image addImage(Image image) {
        if (image.getimageUrl().isEmpty()) {
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
        if (image.getimageId() == null || !imageDao.existsById(image.getimageId())) {
            throw new ImageNotExistException("Image cannot be found");
        }

        return imageDao.save(image);
    }
}