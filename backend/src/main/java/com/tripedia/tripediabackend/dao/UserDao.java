package com.tripedia.tripediabackend.dao;

import com.tripedia.tripediabackend.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends CrudRepository<User, Long> {

}
