package com.tripedia.tripediabackend.apis;

import com.tripedia.tripediabackend.exceptions.InvalidPostException;
import com.tripedia.tripediabackend.model.Spot;
import com.tripedia.tripediabackend.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/spot")
@CrossOrigin(origins = "http://localhost:3000")
public class SpotController {
    private SpotService spotService;

    @Autowired
    public SpotController(SpotService spotService) {
        this.spotService = spotService;
    }

    @GetMapping
    public List<Spot> getAllSpot() {
        return spotService.getAllSpot();
    }

    @GetMapping
    @RequestMapping(path = "{id}")
    public Optional<Spot> getSpotById(@PathVariable("id") Long id) {
        return spotService.getSpotById(id);
    }

    @PostMapping
    @RequestMapping("/add")
    public ResponseEntity<String> addSpot(@RequestBody Spot spot) {
        try {
            Spot savedSpot = spotService.addSpot(spot);
            return ResponseEntity.ok("Added Spot. " + savedSpot.toString());
        } catch (InvalidPostException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping(path = "/del")
    public void delSpot(@RequestBody Spot spot) {
        spotService.delSpot(spot);
    }

    @DeleteMapping("/del/{id}")
    public void delSpotById(@PathVariable("id") Long id) {
        spotService.delSpotById(id);
    }

    @RequestMapping("/update")
    @PostMapping
    public String updateSpot(@RequestBody Spot spot) {
        spotService.updateSpot(spot);

        return "Updated spot";
    }
}
