package com.tripedia.tripediabackend.dao;

import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

public interface FileDao {

    String uploadFile(MultipartFile file);
}
