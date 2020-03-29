package com.learn.web02.repository;

import com.learn.web02.entity.UserDO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserDO, Long> {

    UserDO findByUsername(String username);

}
