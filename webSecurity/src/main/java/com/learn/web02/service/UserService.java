package com.learn.web02.service;

import com.learn.web02.entity.UserDO;

public interface UserService {

    /**
     * Add new user
     *
     * username only, default USER root
     */
    boolean insert(UserDO userDO);

    /**
     * check user info
     * @param username account
     * @return UserEntity
     */
    UserDO getByUsername(String username);

}
