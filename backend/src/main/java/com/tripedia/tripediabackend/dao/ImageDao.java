package com.tripedia.tripediabackend.dao;
import com.tripedia.tripediabackend.model.Image;
import org.springframework.data.repository.CrudRepository;

public interface ImageDao extends CrudRepository<Image, Long> {
}