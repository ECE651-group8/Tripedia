package com.tripedia.tripediabackend.dao;

import com.tripedia.tripediabackend.model.Spot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SearchDao extends JpaRepository<Spot, String> {

    List<Spot> findBySpotNameContaining(String spotName);
}
