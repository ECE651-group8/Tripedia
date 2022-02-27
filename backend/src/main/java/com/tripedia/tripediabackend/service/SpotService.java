package com.tripedia.tripediabackend.service;

import com.tripedia.tripediabackend.dao.SpotDao;
import com.tripedia.tripediabackend.exceptions.PostEmptyTitleException;
import com.tripedia.tripediabackend.exceptions.SpotEmptyNameException;
import com.tripedia.tripediabackend.exceptions.SpotNotExistException;
import com.tripedia.tripediabackend.model.Spot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SpotService {
    private SpotDao spotDao;

    @Autowired
    public SpotService(SpotDao spotDao) {
        this.spotDao = spotDao;
    }

    public Spot addSpot(Spot spot) {
        if (spot.getSpotName().isEmpty()) {
            throw new SpotEmptyNameException("Spot name can not be empty");
        }

        return spotDao.save(spot);
    }

    public List<Spot> getAllSpot() {
        return (List<Spot>) spotDao.findAll();
    }

    public Optional<Spot> getSpotById(Long spotId) {
        return spotDao.findById(spotId);
    }

    public void delSpot(Spot spot) {
        spotDao.delete(spot);
    }

    public void delSpotById(Long id) {
        spotDao.deleteById(id);
    }

    public Spot updateSpot(Spot spot) {
        if (spot.getSpotId() == null || !spotDao.existsById(spot.getSpotId())) {
            throw new SpotNotExistException("Spot cannot be found");
        }

        return spotDao.save(spot);
    }
}
