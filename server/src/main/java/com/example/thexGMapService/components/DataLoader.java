package com.example.thexGMapService.components;

import com.example.thexGMapService.models.Player;
import com.example.thexGMapService.models.Report;
import com.example.thexGMapService.models.Team;
import com.example.thexGMapService.repositories.PlayerRepository;
import com.example.thexGMapService.repositories.ReportRepository;
import com.example.thexGMapService.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    TeamRepository teamRepository;
    @Autowired
    ReportRepository reportRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){
        Team team1 = new Team("Liverpool");
        teamRepository.save(team1);

        Player player1 = new Player("Ben Doak", 20, team1);
        playerRepository.save(player1);

        Player player2 = new Player("Harvey Elliott", 21, team1);
        playerRepository.save(player2);

        Team team2 = new Team("Ajax");
        teamRepository.save(team2);

        Team team3 = new Team("Bonnyrigg Rose");
        teamRepository.save(team3);

        Team team4 = new Team("Celtic Women");
        teamRepository.save(team4);

        Team team5 = new Team("Chelsea Women");
        teamRepository.save(team5);

        Team team6 = new Team("Manchester United Women");
        teamRepository.save(team6);

        Player player3 = new Player("David Kalokoh", 19, team2);
        playerRepository.save(player3);

        Player player4 = new Player("Ross Miller", 18, team3);
        playerRepository.save(player4);

        Player player5 = new Player("Jacynta Galabadaarachchi", 21, team4);
        playerRepository.save(player5);

        Player player6 = new Player("Sam Kerr", 29, team5);
        playerRepository.save(player6);

        Report report1 = new Report(2, 0.9, player1, team3);
        reportRepository.save(report1);

        Report report2 = new Report(1, 0.5, player2, team2);
        reportRepository.save(report2);

        Report report3 = new Report(2, 1.8, player5, team6);
        reportRepository.save(report3);

        Report report4 = new Report(3, 2.3, player6, team6);
        reportRepository.save(report4);
    }

}
