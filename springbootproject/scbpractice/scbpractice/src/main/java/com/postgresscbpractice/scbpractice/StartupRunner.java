package com.postgresscbpractice.scbpractice;

import com.postgresscbpractice.scbpractice.service.MisUpdateService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component

public class StartupRunner implements CommandLineRunner {


    private final MisUpdateService misUpdateService;


    public StartupRunner(MisUpdateService misUpdateService) {
        this.misUpdateService = misUpdateService;
    }

    @Override
    public void run(String... args){
        misUpdateService.runUpdateJob();
    }
}
