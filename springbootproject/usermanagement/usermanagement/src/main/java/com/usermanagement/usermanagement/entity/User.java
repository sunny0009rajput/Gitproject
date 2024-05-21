package com.usermanagement.usermanagement.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;
    private String name;
    private Long mobNumber;
    private String email;

    @Embedded
    private Address address;

}
