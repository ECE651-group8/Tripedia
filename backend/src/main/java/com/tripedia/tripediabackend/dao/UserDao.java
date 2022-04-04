package com.tripedia.tripediabackend.dao;

import com.tripedia.tripediabackend.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface UserDao extends CrudRepository<User, Long> {

    @Query("Select userId from User u where u.userName = :name")
    public Long findId(@Param("name") String name);

//    @Query("Select password from User u where u.userId = :id")
//    public String findPswd(@Param("id") Long id);

//    @Query("SELECT 1 FROM User u WHERE u.userId = 1")
//    public Integer isUserListEmpty();
}
