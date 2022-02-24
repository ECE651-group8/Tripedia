package com.tripedia.tripediabackend.dao;

import com.tripedia.tripediabackend.model.Spot;
import org.springframework.data.repository.CrudRepository;

public interface SpotDao extends CrudRepository<Spot, Long> {
}
