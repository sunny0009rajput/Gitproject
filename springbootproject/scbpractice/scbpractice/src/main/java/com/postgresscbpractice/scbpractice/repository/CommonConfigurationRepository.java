package com.postgresscbpractice.scbpractice.repository;

import com.postgresscbpractice.scbpractice.entity.CommonConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommonConfigurationRepository extends JpaRepository<CommonConfiguration, Long> {
    Optional<CommonConfiguration> findByFileName(String fileName);

}
