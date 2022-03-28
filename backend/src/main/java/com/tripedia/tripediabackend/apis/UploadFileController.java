package com.tripedia.tripediabackend.apis;

import com.tripedia.tripediabackend.dao.FileDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/file")
@CrossOrigin(origins = "http://localhost:3000")
public class UploadFileController {

    @Autowired
    private FileDao fileDao;

    @PostMapping
    public ResponseEntity<Map<String, String>> uploadFile(@RequestParam("file")MultipartFile file) {
        String publicURL = fileDao.uploadFile(file);
        Map<String, String> response = new HashMap<>();
        response.put("publicURL", publicURL);

        return new ResponseEntity<Map<String, String>>(response, HttpStatus.CREATED);
    }


}
