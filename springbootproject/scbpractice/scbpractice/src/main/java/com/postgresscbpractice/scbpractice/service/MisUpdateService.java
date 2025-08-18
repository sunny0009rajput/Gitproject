package com.postgresscbpractice.scbpractice.service;


import com.postgresscbpractice.scbpractice.entity.CommonConfiguration;
import com.postgresscbpractice.scbpractice.repository.CommonConfigurationRepository;
import com.postgresscbpractice.scbpractice.repository.MisTradeSettlementReportRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.io.File;

@Service

public class MisUpdateService {



    private final CommonConfigurationRepository configRepo;
    private final MisTradeSettlementReportRepository reportRepo;

    public MisUpdateService(CommonConfigurationRepository configRepo,
                            MisTradeSettlementReportRepository reportRepo) {
        this.configRepo = configRepo;
        this.reportRepo = reportRepo;
    }



    @Transactional
    public void runUpdateJob() {
        Optional<CommonConfiguration> configOptional = configRepo.findByFileName("mis_trade_settlement_report.parquet");
        if (configOptional.isPresent()) {
            CommonConfiguration config = configOptional.get();
            File file = new File(config.getFilePath());
            if (file.exists()) {
                int updatedCount = reportRepo.updateNullStatusToOpen();
                System.out.println("Updated " + updatedCount + " rows to 'open'.");
            } else {
                System.out.println("File not found: " + config.getFilePath());
            }
        } else {
            System.out.println("Configuration not found for file: mis_trade_settlement_report.parquet");
        }
    }

}
