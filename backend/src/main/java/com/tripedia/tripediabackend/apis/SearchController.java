package com.tripedia.tripediabackend.apis;

import com.tripedia.tripediabackend.dao.SearchDao;
import com.tripedia.tripediabackend.model.Spot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/search")
@CrossOrigin(origins = "http://localhost:3000")
public class SearchController {

    @Autowired
    private SearchDao searchDao;

    @RequestMapping("/findBySpotNameContaining")
    @PostMapping
    public List<Spot> findBySpotNameLike(@RequestBody String spotName) {
        return searchDao.findBySpotNameContaining(spotName);
    }
}
