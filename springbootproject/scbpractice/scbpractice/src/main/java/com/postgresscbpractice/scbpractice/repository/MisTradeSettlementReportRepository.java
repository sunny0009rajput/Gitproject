package com.postgresscbpractice.scbpractice.repository;

import com.postgresscbpractice.scbpractice.entity.Mis_trade_settlement_report;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface MisTradeSettlementReportRepository extends JpaRepository<Mis_trade_settlement_report, Long> {
    @Modifying
    @Transactional
    @Query("UPDATE Mis_trade_settlement_report m SET m.status = 'open' WHERE m.status IS NULL")
    int updateNullStatusToOpen();
}
