package com.tripedia.tripediabackend.service;

import com.tripedia.tripediabackend.dao.SpotDao;
import com.tripedia.tripediabackend.exceptions.*;
import com.tripedia.tripediabackend.exceptions.SpotAddressEmptyException;
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
        if (spot.getSpotName().isEmpty() || spot.getSpotName() == null) {
            throw new SpotEmptyNameException("Spot name can not be empty");
        }
        if (spot.getAddress().isEmpty() || spot.getAddress() == null) {
            throw new SpotAddressEmptyException("Spot Address can not be empty");
        }
        if (spot.getIntroduction().isEmpty() || spot.getIntroduction() == null) {
            throw new SpotEmptyIntroException("Spot name can not be empty");
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
