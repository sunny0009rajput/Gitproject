package com.usermanagementfeign.usermanagementfeign.entity;

import com.fasterxml.jackson.annotation.JsonTypeId;
import lombok.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Data


public class User {


    private Long userId;
    private String name;
    private Long mobNumber;
    private String email;
    private Address address;

}
