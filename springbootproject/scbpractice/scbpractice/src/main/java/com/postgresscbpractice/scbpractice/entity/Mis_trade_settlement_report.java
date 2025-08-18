package com.postgresscbpractice.scbpractice.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "mis_trade_settlement_report")
@Getter
@Setter
public class Mis_trade_settlement_report {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "trade_id")
    private String tradeId;

    @Column(name = "status")
    private String status;

}
