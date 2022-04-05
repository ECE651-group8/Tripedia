package com.tripedia.tripediabackend.dao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.lessThan;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SearchDaoTest {

    @Autowired
    private SearchDao searchDao;

    @Test
    void findBySpotNameContaining_withKey() {
        String key = "Canada";
        List spots = this.searchDao.findBySpotNameContaining(key);
        assertEquals(1, spots.size());
    }

    @Test
    void findBySpotNameContaining_withoutKey() {
        String key = "Waterloo";
        List spots = this.searchDao.findBySpotNameContaining(key);
        assertEquals(0, spots.size());
    }

    @Test
    void findByPopularity() {
        List popularities = this.searchDao.findByPopularity();
        // Because we want at most 8 popular spots,
        // we just need to check the size of popularitis is less than 9.
        assertThat((popularities.size()), lessThan(9));
    }
}