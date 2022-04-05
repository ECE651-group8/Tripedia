package com.tripedia.tripediabackend.service;

import com.tripedia.tripediabackend.dao.SpotDao;
import com.tripedia.tripediabackend.dao.UserDao;
import com.tripedia.tripediabackend.exceptions.SpotAddressEmptyException;
import com.tripedia.tripediabackend.exceptions.SpotEmptyIntroException;
import com.tripedia.tripediabackend.exceptions.SpotEmptyNameException;
import com.tripedia.tripediabackend.model.Spot;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.test.annotation.Rollback;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SpotServiceTest {

    @Resource
    private SpotService spotService;

    @Resource
    private SpotDao spotDao;

    @Test
    @Transactional
    @Rollback
    void addSpot_withoutName() {
        Spot spot = new Spot();
        spot.setSpotId(null);
        spot.setSpotName("");
        spot.setAddress("330 Phillip St");
        spot.setIntroduction("This is in Waterloo");
        assertThrows(SpotEmptyNameException.class, ()->this.spotService.addSpot(spot));
    }

    @Test
    @Transactional
    @Rollback
    void addSpot_withoutAddress() {
        Spot spot = new Spot();
        spot.setSpotName("ICON");
        spot.setAddress("");
        spot.setIntroduction("This is in Waterloo");
        assertThrows(SpotAddressEmptyException.class, ()->this.spotService.addSpot(spot));
    }

    @Test
    @Transactional
    @Rollback
    void addSpot_withoutIntro() {
        Spot spot = new Spot();
        spot.setSpotName("ICON");
        spot.setAddress("330 Phillip St");
        spot.setIntroduction("");
        assertThrows(SpotEmptyIntroException.class, ()->this.spotService.addSpot(spot));
    }

    @Test
    @Transactional
    @Rollback
    void addSpot_normal() {
        Spot spot = new Spot();
        spot.setSpotName("ICON");
        spot.setAddress("330 Phillip St");
        spot.setIntroduction("This is in Waterloo");
        this.spotService.addSpot(spot);
        String spotName = this.spotService.getSpotById(12L).get().getSpotName();
        assertEquals("ICON", spotName);
    }


    @Test
    void getAllSpot() {
        List<Spot> allSpots = this.spotService.getAllSpot();
        int spotNumbers = allSpots.size();
        assertEquals(11, spotNumbers);
    }

    @Test
    void getSpotById() {
        Long curSpotId = 11L;
        String curSpotName = this.spotService.getSpotById(curSpotId).get().getSpotName();
        assertEquals("Waterloo", curSpotName);
    }

//    @Test
//    @Transactional
//    @Rollback
//    void delSpot() {
//
//    }

    @Test
    @Transactional
    @Rollback
    void delSpotById() {
        Long curSpotId = 11L;
        this.spotService.delSpotById(curSpotId);
        Spot curSpot = this.spotService.getSpotById(curSpotId).orElse(null);
        assertEquals(null, curSpot);
    }

    @Test
    @Transactional
    @Rollback
    void delSpotById_noId() {
        Long curSpotId = 100L;
        assertThrows(EmptyResultDataAccessException.class, ()->this.spotService.delSpotById(curSpotId));
    }

    @Test
    void updateSpot() {

    }
}