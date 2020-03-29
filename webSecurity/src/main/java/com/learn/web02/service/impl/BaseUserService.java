package com.learn.web02.service.impl;

import com.learn.web02.entity.UserDO;
import com.learn.web02.repository.UserRepository;
import com.learn.web02.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Primary
@Slf4j
public class BaseUserService implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public BaseUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void insert(UserDO userDO) {
        String username = userDO.getUsername();
        if (exist(username)){
            throw new RuntimeException("User exists!");
        }
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        userDO.setPassword(passwordEncoder.encode(userDO.getPassword()));
        userDO.setRole("USER");
        userRepository.save(userDO);
    }

    @Override
    public UserDO getByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    /**
     * If user exists?
     */
    private boolean exist(String username){
        UserDO userDO = userRepository.findByUsername(username);
        return (userDO != null);
    }

}
